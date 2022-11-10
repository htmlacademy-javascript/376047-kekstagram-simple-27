import { isEscapeKey, isEnterKey } from './util.js';
import { onResetChangeImage } from './change-image.js';
import { deleteFilterSlider } from './slider-filter.js';
const settingModalOpenImage = document.querySelector('#upload-file');
const settingModalCloseImage = document.querySelector('#upload-cancel');
const settingModalImage = document.querySelector('.img-upload__overlay');
const settingModalDescription = document.querySelector('.text__description');

/*Функция закрытие формы по esc*/
function onPopupEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    closeModalImage();
  }
}
/*Функция закрытие формы по enter*/
function onPopupEnterKeydown(evt) {
  if (isEnterKey(evt)) {
    closeModalImage();
  }
}
/*Функция открытия модального окна*/
function openModalImage() {
  settingModalImage.classList.remove('hidden');
  document.body.classList.add('modal-open');
  settingModalCloseImage.addEventListener('keydown', onPopupEscKeydown);
  settingModalCloseImage.addEventListener('keydown', onPopupEnterKeydown);
}
/*Функция закрытия модального окна*/
function closeModalImage() {
  settingModalImage.classList.add('hidden');
  document.body.classList.remove('modal-open');
  settingModalDescription.value = '';
  onResetChangeImage();
  deleteFilterSlider();
  settingModalCloseImage.removeEventListener('keydown', onPopupEscKeydown);
  settingModalCloseImage.removeEventListener('keydown', onPopupEnterKeydown);
}
settingModalOpenImage.addEventListener('click', () => {
  openModalImage();
});
settingModalCloseImage.addEventListener('click', () => {
  closeModalImage();
});

export { openModalImage, closeModalImage };
