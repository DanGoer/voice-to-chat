//callback - where we want to get result
const blobToBase64 = (blob: Blob) => {
  const reader: FileReader = new FileReader();
  let base64data = null;
  reader.onload = function () {
    // @ts-expect-error aaa
    base64data = reader?.result?.split(",")[1];
  };
  reader.readAsDataURL(blob);
  return base64data;
};

export { blobToBase64 };
