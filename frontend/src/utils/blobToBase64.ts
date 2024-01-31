/*//callback - where we want to get result
const blobToBase64 = (blob: Blob, callback: (a: string) => void) => {
  const reader: FileReader = new FileReader();
  reader.onload = function () {
    const base64data = reader?.result?.split(",")[1];
    callback(base64data);
  };
  reader.readAsDataURL(blob);
};

export { blobToBase64 };
*/
