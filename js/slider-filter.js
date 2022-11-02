const sliderElement = document.querySelector('.effect-level__slider');
const settingImagePreview = document.querySelector('.img-upload__preview');
const effectImg = settingImagePreview.querySelector('img');
const inputSliderHidden = document.querySelector('.effect-level__value');

/*Функция удаление слайдера в модальном окне*/
function deleteFilterSlider() {
  if (sliderElement.classList.contains('noUi-target')) {
    sliderElement.noUiSlider.destroy();
    effectImg.style.filter = 'none';
  }
}
/*Функция создание слайдера в модальном окне*/
function createFilterSlider() {
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  });
}
/*Функция изменение слайдера в модальном окне*/
function changeFilterSlider(evt) {
  effectImg.className = evt.target.classList[1];
  if (evt.target.classList[1] === 'effects__preview--chrome' || evt.target.classList[1] === 'effects__preview--sepia') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
    const filterStyle = window.getComputedStyle(evt.target, null).getPropertyValue('filter');
    sliderElement.noUiSlider.on('update', () => {
      effectImg.style.filter = `${filterStyle.slice(0, -3)}(${Number(sliderElement.noUiSlider.get())})`;
      inputSliderHidden.setAttribute('value', Number(sliderElement.noUiSlider.get()));
    });
  }
  else if (evt.target.classList[1] === 'effects__preview--marvin') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
    const filterStyle = window.getComputedStyle(evt.target, null).getPropertyValue('filter');
    sliderElement.noUiSlider.on('update', () => {
      effectImg.style.filter = `${filterStyle.slice(0, -3)}(${Number(sliderElement.noUiSlider.get())}%)`;
      inputSliderHidden.setAttribute('value', Number(sliderElement.noUiSlider.get()));
    });
  }
  else if (evt.target.classList[1] === 'effects__preview--phobos') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    const filterStyle = window.getComputedStyle(evt.target, null).getPropertyValue('filter');
    sliderElement.noUiSlider.on('update', () => {
      effectImg.style.filter = `${filterStyle.slice(0, -5)}(${Number(sliderElement.noUiSlider.get()).toFixed(1)}px)`;
      inputSliderHidden.setAttribute('value', Number(sliderElement.noUiSlider.get()).toFixed(1));
    });
  }
  else if (evt.target.classList[1] === 'effects__preview--heat') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
      connect: 'lower'
    });
    const filterStyle = window.getComputedStyle(evt.target, null).getPropertyValue('filter');
    sliderElement.noUiSlider.on('update', () => {
      effectImg.style.filter = `${filterStyle.slice(0, -3)}(${Number(sliderElement.noUiSlider.get()).toFixed(1)})`;
      inputSliderHidden.setAttribute('value', Number(sliderElement.noUiSlider.get()).toFixed(1));
    });
  }
  else if (evt.target.classList[1] === 'effects__preview--none') {
    deleteFilterSlider();
  }
}
export { deleteFilterSlider, createFilterSlider, changeFilterSlider, sliderElement };
