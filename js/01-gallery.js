import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", onClickImg);

const addGallery = galleryItems
  .map(
    (element) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="#">
  <img
  loading="lazy"
    class="gallery__image"
    src="${element.preview}" alt="${element.description}" data-source="${element.original}"
  />
    </a>
    </div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", addGallery);

let instance = "";

function onClickImg(event) {
  instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}">
`);

  instance.show();
}

document.addEventListener("keydown", onCloseEscape);

function onCloseEscape(event) {
    if (event.code === "Escape") {
        instance.close()
    }
};