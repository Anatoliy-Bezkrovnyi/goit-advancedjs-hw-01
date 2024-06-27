import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems));


function createMarkup(arrayOfImages) {
    return arrayOfImages.
        map(({ preview, original, description }) =>`
        <li class="gallery-item">
        <a class="gallery-link" href="${original}">
        <img
        class="gallery-image"
        src='${preview}'
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </li>`).join('');
}

new SimpleLightbox(`.gallery .gallery-link`);


