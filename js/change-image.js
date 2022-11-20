const modalImagePreview = document.querySelector('.img-upload__preview');
const modalImage = modalImagePreview.querySelector('img');
const modalImageScale = document.querySelector('.img-upload__scale');
const modalControlValue = document.querySelector('.scale__control--value');
const modalImageDefaultSrc = modalImage.src;
const MAX_VALUE = 100;
const MIN_VALUE = 25;
/*Возвращение по умолчанию*/
function onResetChangeImage() {
  modalControlValue.setAttribute('value', '100%');
  modalImage.style.transform = 'scale(1)';
  modalImage.removeAttribute('class');
  modalImageScale.removeEventListener('click', changeModalControlValue);
  modalImage.src = modalImageDefaultSrc;
}
/*Добавление клика*/
function onClickModalControlValue() {
  modalImageScale.addEventListener('click', changeModalControlValue);
}
/*Изменение размера картинки*/
function сhangeSizeImage(evt, value) {
  const { target } = evt;
  if (target.classList.contains('scale__control--bigger') && value < MAX_VALUE) {
    value += MIN_VALUE;
    if (value === MAX_VALUE) {
      modalImage.style.transform = 'scale(1)';
    }
    else {
      modalImage.style.transform = `scale(0.${value})`;
    }
  }
  else if (target.classList.contains('scale__control--smaller') && value > MIN_VALUE) {
    value -= MIN_VALUE;
    modalImage.style.transform = `scale(0.${value})`;
  }
  return value;
}
/*Получение значение размера картинки в модальном окне*/
function getModalControlValue(value) {
  return (value.includes('%')) ? value.slice(0, -1) : value;
}
/*Изменение значения размера картинки в модальном окне*/
function changeModalControlValue(evt) {
  modalControlValue.setAttribute('value', `${сhangeSizeImage(evt, Number(getModalControlValue(modalControlValue.value)))}%`);
}
export { onResetChangeImage, modalImage, onClickModalControlValue };
