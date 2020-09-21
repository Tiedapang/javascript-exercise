export default function numberMapToWord(collection) {
  const result = collection.map(item => String.fromCharCode(96 + item));
  return result;
}
