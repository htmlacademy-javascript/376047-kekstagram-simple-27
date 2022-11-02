import { createFilterSlider, changeFilterSlider, sliderElement } from './slider-filter.js';
const settingImagePreview = document.querySelector('.img-upload__preview');
const settingImageScale = document.querySelector('.img-upload__scale');
const settingModalControlValue = document.querySelector('.scale__control--value');
const settingImageEffect = document.querySelector('.img-upload__effects');
/*Функция сброса изменений картинки*/
function onResetChangeImage() {
  settingModalControlValue.setAttribute('value', '100%');
  settingImagePreview.style.transform = 'scale(1)';
  settingImagePreview.querySelector('img').removeAttribute('class');
}
/*Функция изменение размера картинки*/
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
/*Фунцкия получение значение размера картинки в модальном окне*/
function getModalControlValue(value) {
  if (value.indexOf('%')) {
    return value.slice(0, -1);
  }
}
settingImageScale.addEventListener('click', (evt) => {
  settingModalControlValue.setAttribute('value', `${onChangeSizeImage(evt, Number(getModalControlValue(settingModalControlValue.value)))}%`);
});
settingImageEffect.addEventListener('click', (evt) => {
  if (evt.target.closest('.effects__label')) {
    if (!sliderElement.classList.contains('noUi-target')) {
      createFilterSlider();
    }
    changeFilterSlider(evt);
  }
});

export { onResetChangeImage, onChangeSizeImage };
