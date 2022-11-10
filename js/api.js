import { showError } from './user-form.js';
const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((Response) => Response.json())
    .then((image) => {
      onSuccess(image);
    }).catch(() => {
      showError();
    });
};
const sendData = (onSuccess, body) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      showError();
    }
  })
    .catch(() => {
      showError();
    });
};
export { sendData, getData };
