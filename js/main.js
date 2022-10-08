const COUNT_CREATE_PHOTO = 25;
function getRandom(min, max) {
  return (min >= 0 && max >= 0) ? Math.floor(Math.random() * (max - min) + min) : NaN;
}
function checkLengthString(str, strLength) {
  return str.length <= strLength;
}
checkLengthString();
function setId(arr, min, max) {
  for (let i = 0; i < max; i++) {
    arr[i].id = min;
    arr[i].url = `photos/${min}.jpg`;
    min++;
  }
  return arr;
}
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
const createPhoto = () => ({
  id: '',
  url: '',
  description: `${getRandomArrayElement(ARRAY_DECRIPTION)}`,
  likes: getRandom(15, 200),
  comments: getRandom(0, 200)
});
const publicPhotos = Array.from({ length: COUNT_CREATE_PHOTO }, createPhoto);
setId(publicPhotos, 1, COUNT_CREATE_PHOTO);
