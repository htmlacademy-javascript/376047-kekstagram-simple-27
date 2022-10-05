function getRandom(min, max) {
  return (min >= 0 && max >= 0) ? Math.floor(Math.random() * (max - min) + min) : NaN;
}
getRandom(1, 10);
function checkLengthString(str, strLength) {
  return str.length <= strLength;
}
checkLengthString('12', 10);

