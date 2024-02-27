import { useRef, useState } from "react";

const mimeType: string = "audio/webm";

enum RecordingStatus {
  inactive = "inactive",
  recording = "recording",
}

function useAudioRecorder() {
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState<RecordingStatus>(
    RecordingStatus.inactive
  );
  const [audioChunks, setAudioChunks] = useState<any[]>([]);
  const [audio, setAudio] = useState<null | string>(null);

  const startRecording = async (stream) => {
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
    startRecording,
    stopRecording,
    recordingStatus,
    audio,
    audioChunks,
  };
}

export default useAudioRecorder;
