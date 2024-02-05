const getTextToChat = async (text, settings) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_HOST}api/textToSpeech/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
        }),
      }
    ).then((res) => res.text());
    console.log("response", response);
  } catch (error) {
    console.log(error);
  }
};

export { getTextToChat };
