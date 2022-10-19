import { createPhotos } from './data.js';
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');
const anotherPicture = createPhotos();
const anotherListFragment = document.createDocumentFragment();

anotherPicture.forEach(({ url, likes, comments }) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  anotherListFragment.appendChild(pictureElement);
});
pictureContainer.append(anotherListFragment);
