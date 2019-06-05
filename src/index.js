import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

import Siema from 'siema';

import Timer from './js/timer';
import './css/styles.css';
import './css/timer.css';

const notyf = new Notyf();

notyf.error('Please fill out the form');
notyf.success('Operation was successful!');

const siema = new Siema({
  selector: '#gallery-1',
});

document.querySelector('.prev').addEventListener('click', () => siema.prev());
document.querySelector('.next').addEventListener('click', () => siema.next());

new Timer({
  element: document.querySelector('#timer-1'),
  intialValue: 10,
  step: 5,
});

new Timer({
  element: document.querySelector('#timer-2'),
  intialValue: 1,
  step: 2,
});

// console.log(basicLightbox);

// const instance = basicLightbox.create(document.querySelector('#modal'));

// instance.show();
