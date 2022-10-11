import { getRandom, getRandomArrayElement, getNumber } from './util.js';
const ARRAY_NUMBER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const COUNT_CREATE_PHOTO = 25;
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
const createPhotos = () => Array.from({ length: COUNT_CREATE_PHOTO }, createPhoto);
export { createPhotos };
