function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
getRandom(1, 10);
function checkLengthString(str, strLength) {
  if (str.length <= strLength) {
    return true;
  }
  else {
    return false;
  }
}
checkLengthString('12', 10);

