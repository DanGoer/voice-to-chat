//callback - where we want to get result
const blobToBase64 = async (blob: Blob) => {
  return new Promise((resolve, _) => {
    const reader: FileReader = new FileReader();

    reader.onloadend = () => {
      // @ts-expect-error aaa
      resolve(reader?.result?.split(",")[1]);
    };
    reader.readAsDataURL(blob);
  });
};

export { blobToBase64 };
