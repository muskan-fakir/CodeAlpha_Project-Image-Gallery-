let currentIndex = 0;
const images = document.querySelectorAll('.image-item img');

function openLightbox(imgElement) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.style.display = "block";
  lightboxImg.src = imgElement.src;
  currentIndex = Array.from(images).indexOf(imgElement);
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = "none";
}

function nextImage(e) {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function prevImage(e) {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function filterImages(category) {
  const items = document.querySelectorAll('.image-item');
  items.forEach(item => {
    item.style.display = category === 'all' || item.classList.contains(category)
      ? 'block'
      : 'none';
  });
}
