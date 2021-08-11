import { default as galleryItems } from './app.js';

const galleryListEl = document.querySelector('ul.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
console.log(galleryMarkup);
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

