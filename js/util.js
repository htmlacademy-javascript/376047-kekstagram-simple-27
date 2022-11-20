const KEY_ESCAPE = 'Escape';
const KEY_ENTER = 'Enter';
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
function isEscapeKey(evt) { return evt.key === KEY_ESCAPE; }
function isEnterKey(evt) { return evt.key === KEY_ENTER; }

export { isEscapeKey, isEnterKey };
