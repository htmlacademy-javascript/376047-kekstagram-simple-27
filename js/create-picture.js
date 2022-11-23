const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');
/*Создание изображений при загрузке*/
const createImages = (images) => {
  const anotherListFragment = document.createDocumentFragment();
  images.forEach(({ url, likes, comments, description }) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    anotherListFragment.appendChild(pictureElement);
  });
  pictureContainer.append(anotherListFragment);
};
export { createImages };
