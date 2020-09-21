function chooseMultiplesOfThree(collection) {
  const result = collection.filter(item => item % 3 === 0);
  return result;
}

function chooseNoRepeatNumber(collection) {
  const result = collection.filter((item, index) => collection.indexOf(item) === index);
  return result;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
