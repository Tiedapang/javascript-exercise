export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  let startWithANumbers = [];
  startWithANumbers = collection.filter(item => item.startsWith('粤A'));
  return startWithANumbers.length;
}
