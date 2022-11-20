import { showError, createErrorGetData } from './user-form.js';
const GET_DATA = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const POST_DATA = 'https://27.javascript.pages.academy/kekstagram-simple';
/*Отправка данных get запросом*/
function getData(onSuccess) {
  fetch(GET_DATA)
    .then((Response) => Response.json())
    .then((image) => {
      onSuccess(image);
    }).catch(() => {
      createErrorGetData();
    });
}
/*Отправка данных post запросом*/
function postData(onSuccess, body) {
  fetch(POST_DATA,
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
}
export { postData, getData };
