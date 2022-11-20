import { createImages } from './create-picture.js';
import './image-preview.js';
import { getData } from './api.js';

getData((image) => {
  createImages(image);
});
