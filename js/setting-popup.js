import { isEscapeKey, isEnterKey } from './util.js';
const settingModalOpenImage = document.querySelector('#upload-file');
const settingModalCloseImage = document.querySelector('#upload-cancel');
const settingModalImage = document.querySelector('.img-upload__overlay');
const settingImagePreview = document.querySelector('.img-upload__preview');
const settingImageScale = document.querySelector('.img-upload__scale');
const settingModalControlValue = document.querySelector('.scale__control--value');
const settingImageEffect = document.querySelector('.effects__list');
function onPopupEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    closeModalImage();
  }
}
function onPopupEnterKeydown(evt) {
  if (isEnterKey(evt)) {
    closeModalImage();
  }
}
function openModalImage() {
  settingModalImage.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  settingModalCloseImage.addEventListener('keydown', onPopupEnterKeydown);
}
function closeModalImage() {
  settingModalImage.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  settingModalCloseImage.removeEventListener('keydown', onPopupEnterKeydown);
}
function getModalControlValue(value) {
  if (value.indexOf('%')) {
    return value.slice(0, -1);
  }
}
function onChangeSizeImage(evt, value) {
  if (evt.target.classList.contains('scale__control--bigger') && value < 100) {
    value += 25;
    if (value === 100) {
      settingImagePreview.style.transform = 'scale(1)';
    }
    else {
      settingImagePreview.style.transform = `scale(0.${value})`;
    }
  }
  else if (evt.target.classList.contains('scale__control--smaller') && value > 25) {
    value -= 25;
    settingImagePreview.style.transform = `scale(0.${value})`;
  }
  return value;
}
function onFilterImageChange(evt) {
  if (evt.target.closest('.effects__preview')) {
    settingImagePreview.querySelector('img').className = '';
    settingImagePreview.querySelector('img').className = evt.target.classList[1];
  }
}
settingModalOpenImage.addEventListener('click', () => {
  openModalImage();
});
settingModalCloseImage.addEventListener('click', () => {
  closeModalImage();
});
settingImageScale.addEventListener('click', (evt) => {
  settingModalControlValue.setAttribute('value', `${onChangeSizeImage(evt, Number(getModalControlValue(settingModalControlValue.value)))}%`);
});
settingImageEffect.addEventListener('click', (evt) => {
  onFilterImageChange(evt);
});
