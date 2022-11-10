import { closeModalImage } from './setting-popup.js';
import { setUserFormSubmit } from './user-form.js';
import { createImages } from './create-picture.js';
import { getData } from './api.js';
getData((image) => {
  createImages(image);
});
setUserFormSubmit(closeModalImage);
