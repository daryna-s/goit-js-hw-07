import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryContainer = document.querySelector('.gallery');
const picturesMarkup = createPictureMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);

galleryContainer.addEventListener('click', onGalleryItemsClick);


function createPictureMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
   <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" 
    data-source="${original}" 
    alt="${description}" />
  </a>
</div>;
    `;
    })
    .join('');
};

function onGalleryItemsClick(evt) {
    evt.preventDefault();
  const isPictureEl = evt.target.classList.contains('gallery__item');

  if (!isPictureEl) {
    return;
  }
    const currentPicture = evt.target.dataset.source;
  const instance = basicLightbox.create(`
    <img class="modal_image" src="${currentPicture}"/>

`);

  instance.show();
};

console.log(galleryItems);
