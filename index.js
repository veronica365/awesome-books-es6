import { DateTime } from './modules/luxon.js';
import {
  header,
  booksList,
  addBook,
  contactIfno,
  footer,
} from './modules/components.js';
import Library from './modules/library.js';

const generateDefaultHTML = () => `${header()}${footer()}`;

const generateSections = () => `${booksList()}${addBook()}${contactIfno()}`;

document.body.innerHTML = generateDefaultHTML();
document.querySelector('main').innerHTML = generateSections();

document.querySelector('#articles').innerHTML = Library.displayData();

const addLink = document.querySelector('.nav-item-add');
const listLink = document.querySelector('.nav-item-list');
const contactLink = document.querySelector('.nav-item-contact');
const form = document.querySelector('#add-book');
const contact = document.querySelector('#contact-info');
const heading = document.querySelector('.heading');
const articles = document.querySelector('#articles');

addLink.addEventListener('click', () => {
  form.classList.remove('hidden');
  heading.classList.add('hidden');
  addLink.classList.add('active');
  articles.classList.add('hidden');
  listLink.classList.remove('active');
  contactLink.classList.remove('active');
  contact.classList.add('hidden');
});

const toggleAddSection = () => {
  articles.classList.remove('hidden');
  heading.classList.remove('hidden');
  listLink.classList.add('active');
  form.classList.add('hidden');
  addLink.classList.remove('active');
  contactLink.classList.remove('active');
  contact.classList.add('hidden');
};

listLink.addEventListener('click', toggleAddSection);

contactLink.addEventListener('click', () => {
  contact.classList.remove('hidden');
  form.classList.add('hidden');
  heading.classList.add('hidden');
  articles.classList.add('hidden');
  listLink.classList.remove('active');
  addLink.classList.remove('active');
  contactLink.classList.add('active');
});

const formText = document.querySelector('#article-form');
formText.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleText = formText.elements.titleText.value;
  const authorText = formText.elements.authorText.value;
  Library.addData(titleText, authorText);
  formText.elements.titleText.value = '';
  formText.elements.authorText.value = '';
  Library.displayData();
  toggleAddSection();
});

const dateElement = document.querySelector('.date span');
setInterval(() => {
  const date = DateTime.now();
  dateElement.innerHTML = date.toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS,
  );
}, 1000);
