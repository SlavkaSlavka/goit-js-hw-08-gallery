import { default as galleryItems } from './app.js';

const galleryListEl = document.querySelector('ul.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
const lightBoxEl = document.querySelector('.lightbox');
const lightboxImageEl = document.querySelector('.lightbox__image');
const buttonCloseEl = document.querySelector('button[data-action="close-lightbox"]');
const lightBoxOverlayEl = document.querySelector('div.lightbox__overlay');
console.log(lightBoxOverlayEl);
galleryListEl.insertAdjacentHTML('beforeend', galleryMarkup);


function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `
    }).join('');

};


galleryListEl.addEventListener('click', onGallertyListClick);

function onGallertyListClick(evt) {
  evt.preventDefault();
  const isGalleryImageEl = evt.target.classList.contains('gallery__image');
  if (!isGalleryImageEl) {
    return
  }
  lightBoxEl.classList.add('is-open');
  lightboxImageEl.src = evt.target.dataset.source;
  lightboxImageEl.alt = evt.target.alt;

}

buttonCloseEl.addEventListener('click', onModalClose);
function onModalClose() {
  lightBoxEl.classList.remove('is-open');
  lightboxImageEl.src = '';
  lightboxImageEl.alt = '';
}

window.addEventListener(`keydown`, onModalClosebyEsc);
function onModalClosebyEsc(e) {
   if(e.code === 'Escape'){
     onModalClose();
  }
}

lightBoxOverlayEl.addEventListener('click', onModalClose);
