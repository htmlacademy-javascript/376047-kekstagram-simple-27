import { isEscapeKey } from './util.js';
import { onResetChangeImage, onClickModalControlValue } from './change-image.js';
import { deleteSliderEffect, onCLickImageUpload } from './slider-image.js';
import { changeInputFile } from './image-preview.js';
import { setSubmit, removeSubmit } from './user-form.js';
const modalOpen = document.querySelector('#upload-file');
const modalClose = document.querySelector('#upload-cancel');
const modalImageUpload = document.querySelector('.img-upload__overlay');
const modalDescription = modalImageUpload.querySelector('.text__description');
const imageUploadEffect = document.querySelector('.img-upload__effects');

/*Закрытие формы по esc*/
function onPopupEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    closeModalImage();
  }
}
/*Открытие формы по клику*/
function onPopupClickOpen() {
  openModalImage();
}
/*Закрытия формы по клику*/
function onPopupClickClose() {
  closeModalImage();
}
/*Открытие модального окна*/
function openModalImage() {
  modalImageUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');
  modalOpen.removeEventListener('click', onPopupClickOpen);
  window.addEventListener('keydown', onPopupEscKeydown);
  modalClose.addEventListener('click', onPopupClickClose);
  imageUploadEffect.addEventListener('click', onCLickImageUpload);
  modalOpen.addEventListener('change', changeInputFile);
  onClickModalControlValue();
  setSubmit();
}
/*Закрытие модального окна*/
function closeModalImage() {
  modalImageUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  modalDescription.value = '';
  modalOpen.value = '';
  window.removeEventListener('keydown', onPopupEscKeydown);
  modalClose.removeEventListener('click', onPopupClickClose);
  modalOpen.removeEventListener('change', changeInputFile);
  imageUploadEffect.removeEventListener('click', onCLickImageUpload);
  modalOpen.addEventListener('click', onPopupClickOpen);
  onResetChangeImage();
  deleteSliderEffect();
  removeSubmit();
}
modalOpen.addEventListener('click', onPopupClickOpen);
export { closeModalImage, modalOpen };
