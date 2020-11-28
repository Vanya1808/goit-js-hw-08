import gallery from "./gallery-items.js"
const listGallery = document.querySelector('.js-gallery')
const lightbox = document.querySelector('.lightbox')
const closeLightbox = document.querySelector('.lightbox__button')
const lightboxImage = document.querySelector('.lightbox__image')
listGallery.addEventListener('click', (event)=>{
  if(event.target.tagName === 'IMG') {
    event.preventDefault()
    lightbox.classList.add('is-open')
    const modalImageSrc =  event.target.dataset.source
    lightboxImage.setAttribute('src', modalImageSrc)
    console.dir(event.target)
  }
})
closeLightbox.addEventListener('click', (e) => {
  lightbox.classList.remove('is-open')
  lightboxImage.removeAttribute('src')
})
console.log(gallery)

gallery.map((obj, i, arr)=>{
  console.log(obj);
  const imgPrewiewGallery = document.createElement('img');
  imgPrewiewGallery.setAttribute('src', obj.preview)
  imgPrewiewGallery.setAttribute('alt', obj.description)
  imgPrewiewGallery.classList.add('gallery__image')
  imgPrewiewGallery.setAttribute('data-source', obj.original)
  imgPrewiewGallery.setAttribute('data-value', i)
  console.log(imgPrewiewGallery)

  const linkGallery = document.createElement('a')
  linkGallery.classList.add('gallery-link')
  linkGallery.setAttribute('href', obj.original)

  linkGallery.appendChild(imgPrewiewGallery)

  const galleryItem = document.createElement('li')
  galleryItem.classList.add('gallery_item')

  galleryItem.appendChild(linkGallery)
  console.log(galleryItem);

  listGallery.appendChild(galleryItem)
});