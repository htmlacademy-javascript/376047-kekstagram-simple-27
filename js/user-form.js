import { isEscapeKey } from './util.js';
import { postData } from './api.js';
import { closeModalImage } from './popup-image.js';
const uploadFormImage = document.querySelector('#upload-select-image');
const uploadFormSubmitButton = uploadFormImage.querySelector('#upload-submit');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');


/*Создание окна с ошибкой при получение фотографий */
function createErrorGetData() {
  const errorTemplateGetData = document.createElement('section');
  const errorWrapperGetData = document.createElement('div');
  const errorTitleGetData = document.createElement('h2');
  errorTemplateGetData.classList.add('error');
  errorWrapperGetData.classList.add('error__inner');
  errorTitleGetData.classList.add('error__title');
  errorTitleGetData.innerText = 'Ошибка загрузки изображений';
  errorWrapperGetData.append(errorTitleGetData);
  errorTemplateGetData.append(errorWrapperGetData);
  document.body.append(errorTemplateGetData);
  window.addEventListener('click', removeErrorGetData);
  window.addEventListener('keydown', removeErrorGetData);
}
/*Удаление окна с ошибкой при загрузки фотографий*/
function removeErrorGetData(evt) {
  const { target } = evt;
  if (target.classList.value === 'error' || isEscapeKey(evt)) {
    document.querySelector('.error').remove();
    window.removeEventListener('click', removeErrorGetData);
    window.removeEventListener('keydown', removeErrorGetData);
    document.querySelector('.error').remove();
  }
}
/*Показ окна с ошибкой при отправки формы*/
function showError() {
  const errorFragment = document.createDocumentFragment();
  const showErrorFragment = errorTemplate.cloneNode(true);
  errorFragment.appendChild(showErrorFragment);
  document.body.append(errorFragment);
  document.querySelector('.error__button').addEventListener('click', removeError);
  window.addEventListener('keydown', removeError);
  window.addEventListener('click', removeError);
  uploadFormSubmitButton.disabled = false;
}
/*Удаление окна с ошибкой при отправки формы*/
function removeError(evt) {
  if (isEscapeKey(evt) || evt.target.classList.value === 'error' || evt.target.classList.value === 'error__button') {
    document.querySelector('.error__button').removeEventListener('click', removeError);
    window.removeEventListener('keydown', removeError);
    window.removeEventListener('click', removeError);
    document.querySelector('.error').remove();
  }
}
/*Удаление окна при успешной отправки формы*/
function removeSuccess(evt) {
  if (isEscapeKey(evt) || evt.target.classList.value === 'success' || evt.target.classList.value === 'success__button') {
    document.querySelector('.success__button').removeEventListener('click', removeSuccess);
    window.removeEventListener('keydown', removeSuccess);
    window.removeEventListener('click', removeSuccess);
    document.querySelector('.success').remove();
  }
}
/*Показ окна при успешной отправки формы*/
function showSuccess() {
  const successFragment = document.createDocumentFragment();
  const showSuccessrFragment = successTemplate.cloneNode(true);
  successFragment.appendChild(showSuccessrFragment);
  document.body.append(successFragment);
  document.querySelector('.success__button').addEventListener('click', removeSuccess);
  window.addEventListener('keydown', removeSuccess);
  window.addEventListener('click', removeSuccess);
  uploadFormSubmitButton.disabled = false;
}
function setSubmit() {
  uploadFormImage.addEventListener('submit', setUserFormSubmit);
}
function removeSubmit() {
  uploadFormImage.removeEventListener('submit', setUserFormSubmit);
}

/*Отправка формы*/
function setUserFormSubmit(evt) {
  evt.preventDefault();
  uploadFormSubmitButton.disabled = true;
  postData(() => {
    closeModalImage();
    showSuccess();
  }, new FormData(evt.target)
  );
}
export { setUserFormSubmit, showError, createErrorGetData, setSubmit, removeSubmit };
