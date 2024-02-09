import { useRef, useState } from "react";

const mimeType: string = "audio/webm";

enum RecordingStatus {
  inactive = "inactive",
  recording = "recording",
}

function useAudioRecorder() {
  const [permission, setPermission] = useState<boolean>(false);
  const [stream, setStream] = useState<null | MediaStream>(null);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState<RecordingStatus>(
    RecordingStatus.inactive
  );
  const [audioChunks, setAudioChunks] = useState<any[]>([]);
  const [audio, setAudio] = useState<null | string>(null);
  const [text, setText] = useState<string>("");

  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData: any = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  const startRecording = async () => {
    setRecordingStatus(RecordingStatus.recording);
    //create new Media recorder instance using the stream

    // @ts-expect-error aaa
    const media = new MediaRecorder(stream, { type: mimeType });
    //set the MediaRecorder instance to the mediaRecorder ref
    mediaRecorder.current = media;
    //invokes the start method to start the recording process
    mediaRecorder.current.start();
    const localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };

  const stopRecording = () => {
    setRecordingStatus(RecordingStatus.inactive);
    //stops the recording instance
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      //creates a blob file from the audiochunks data
      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
      //creates a playable URL from the blob file.
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
    };
  };

  return {
    getMicrophonePermission,
    startRecording,
    stopRecording,
    recordingStatus,
    permission,
    audio,
    text,
    setText,
    audioChunks,
  };
}

export default useAudioRecorder;
