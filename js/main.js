function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
getRandom(1, 10);
function checkLengthString(str, strLength) {
  return (str.length <= strLength) ? true : false;
}
checkLengthString('12', 10);

