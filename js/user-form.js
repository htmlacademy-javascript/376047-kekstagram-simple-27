import { isEscapeKey } from './util.js';
import { sendData } from './api.js';
const formImage = document.querySelector('#upload-select-image');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const submitButton = document.querySelector('#upload-submit');

const showError = () => {
  const errorFragment = document.createDocumentFragment();
  const showErrorFragment = errorTemplate.cloneNode(true);
  errorFragment.appendChild(showErrorFragment);
  if (!document.querySelector('.error')) {
    document.body.append(errorFragment);
  }
  else {
    document.querySelector('.error').style.display = 'flex';
  }
  document.querySelector('.error__button').addEventListener('click', () => {
    document.querySelector('.error').style.display = 'none';
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      document.querySelector('.error').style.display = 'none';
    }
  });
  document.addEventListener('click', (evt) => {
    if (evt.target.classList.value === 'error') {
      document.querySelector('.error').style.display = 'none';
    }
  });
  submitButton.disabled = false;
};
const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const showSuccess = () => {
  const successFragment = document.createDocumentFragment();
  const showSuccessrFragment = successTemplate.cloneNode(true);
  successFragment.appendChild(showSuccessrFragment);
  if (!document.querySelector('.success')) {
    document.body.append(successFragment);
  }
  else {
    document.querySelector('.success').style.display = 'flex';
  }
  document.querySelector('.success__button').addEventListener('click', () => {
    document.querySelector('.success').style.display = 'none';
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      document.querySelector('.success').style.display = 'none';
    }
  });
  document.addEventListener('click', (evt) => {
    if (evt.target.classList.value === 'success') {
      document.querySelector('.success').style.display = 'none';
    }
  });
  submitButton.disabled = false;
};
const setUserFormSubmit = (onSuccess) => {
  formImage.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blockSubmitButton();
    sendData(() => {
      onSuccess();
      showSuccess();
    },
    new FormData(evt.target)
    );
  });
};
export { setUserFormSubmit, showError };
