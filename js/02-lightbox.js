import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const picturesMarkup = createPictureMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);

function createPictureMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
    })
    .join('');
};

new SimpleLightbox('.gallery__item', {
  captionsData: `alt`,
  captionDelay: 250,
});