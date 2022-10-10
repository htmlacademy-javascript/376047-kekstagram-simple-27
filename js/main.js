const COUNT_CREATE_PHOTO = 25;
function getRandom(min, max) {
  return (min >= 0 && max >= 0) ? Math.floor(Math.random() * (max - min) + min) : NaN;
}
function checkLengthString(str, strLength) {
  return str.length <= strLength;
}
checkLengthString(1, 2);
function getNumber(arr) {
  const arrElement = arr[0];
  arr.splice(0, 1);
  return arrElement;
}
const ARRAY_NUMBER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const ARRAY_DECRIPTION = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
const getRandomArrayElement = (elements) => elements[getRandom(0, elements.length - 1)];
function createPhoto() {
  const numberID = getNumber(ARRAY_NUMBER);
  return {
    id: numberID,
    url: `photos/${numberID}.jpg`,
    description: `${getRandomArrayElement(ARRAY_DECRIPTION)}`,
    likes: getRandom(15, 200),
    comments: getRandom(0, 200)
  };
}
Array.from({ length: COUNT_CREATE_PHOTO }, createPhoto);
