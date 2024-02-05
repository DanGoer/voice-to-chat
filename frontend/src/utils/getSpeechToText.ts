import { blobToBase64 } from "./blobToBase64";

const getSpeechToText = async (audioChunks, setText) => {
  try {
    const audioBlob = new Blob(audioChunks, { type: "audio/wav" });

    const audioData = await blobToBase64(audioBlob);

    console.log("audiodata" + audioData);
    const response = await fetch(
      `${import.meta.env.VITE_HOST}api/speechToText/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          audio: audioData,
        }),
      }
    ).then((res) => res.text());
    console.log("response", response);
    setText(response);
  } catch (error) {
    console.log(error);
  }
};

export { getSpeechToText };
