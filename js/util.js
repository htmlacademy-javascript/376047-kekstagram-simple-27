function getRandom(min, max) {
  return (min >= 0 && max >= 0) ? Math.floor(Math.random() * (max - min) + min) : NaN;
}
function checkLengthString(str, strLength) {
  return str.length <= strLength;
}
function getNumber(arr) {
  const arrElement = arr[0];
  arr.splice(0, 1);
  return arrElement;
}
checkLengthString(1, 2);
const getRandomArrayElement = (elements) => elements[getRandom(0, elements.length - 1)];
export { getRandom, getRandomArrayElement, getNumber };
function isEscapeKey(evt) { return evt.key === 'Escape'; }
function isEnterKey(evt) { return evt.key === 'Enter'; }

export { isEscapeKey, isEnterKey };
