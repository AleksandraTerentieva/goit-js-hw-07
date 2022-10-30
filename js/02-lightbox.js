import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const addGallery = galleryItems
  .map(
    (element) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${element.original}">
  <img
   class="gallery__image"
    src="${element.preview}" alt="${element.description}" data-source="${element.original}"
  />
    </a>
    </li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", addGallery);

let galleryImg = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
