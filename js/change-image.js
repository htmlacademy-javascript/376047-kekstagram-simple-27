const SCALE = {
  MAX: 100,
  MIN: 25,
  STEP: 25
};
const modalImagePreview = document.querySelector('.img-upload__preview');
const modalImage = modalImagePreview.querySelector('img');
const modalImageScale = document.querySelector('.img-upload__scale');
const modalControlValue = document.querySelector('.scale__control--value');
const modalImageDefaultSrc = modalImage.src;
/*Возвращение по умолчанию*/
const onResetChangeImage = () => {
  modalControlValue.setAttribute('value', '100%');
  modalImage.style.transform = 'scale(1)';
  modalImage.removeAttribute('class');
  modalImageScale.removeEventListener('click', changeModalControlValue);
  modalImage.src = modalImageDefaultSrc;
};
/*Добавление клика*/
const onClickModalControlValue = () => {
  modalImageScale.addEventListener('click', changeModalControlValue);
};
/*Изменение размера картинки*/
const сhangeSizeImage = (evt, scaleValue) => {
  const { target } = evt;
  if (target.classList.contains('scale__control--bigger')) {
    scaleValue = Math.min(scaleValue + SCALE.STEP, SCALE.MAX);
    if (scaleValue === SCALE.MAX) {
      modalImage.style.transform = 'scale(1)';
    }
    else {
      modalImage.style.transform = `scale(0.${scaleValue})`;
    }
  }
  else if (target.classList.contains('scale__control--smaller')) {
    scaleValue = Math.max(scaleValue - SCALE.STEP, SCALE.MIN);
    modalImage.style.transform = `scale(0.${scaleValue})`;
  }
  return scaleValue;
};
/*Получение значение размера картинки в модальном окне*/
const getModalControlValue = (scaleValue) => (scaleValue.includes('%')) ? scaleValue.slice(0, -1) : scaleValue;

/*Изменение значения размера картинки в модальном окне*/
function changeModalControlValue(evt) {
  modalControlValue.setAttribute('value', `${сhangeSizeImage(evt, Number(getModalControlValue(modalControlValue.value)))}%`);
}
export { onResetChangeImage, modalImage, onClickModalControlValue };
