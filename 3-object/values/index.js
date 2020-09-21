export default function countTypesNumber(source) {
  const value = Object.values(source);
  return value.reduce((item1, item2) => Number(item1) + Number(item2));
}
