document.addEventListener('DOMContentLoaded', function () {
  var images = document.querySelectorAll('.archive img');
  if (!images.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  var overlayImg = document.createElement('img');
  overlay.appendChild(overlayImg);
  document.body.appendChild(overlay);

  function openLightbox(src, alt) {
    overlayImg.src = src;
    overlayImg.alt = alt || '';
    overlay.classList.add('is-active');
  }

  function closeLightbox() {
    overlay.classList.remove('is-active');
  }

  images.forEach(function (img) {
    if (img.closest('a')) return;
    img.classList.add('lightbox-trigger');
    img.addEventListener('click', function () {
      openLightbox(img.src, img.alt);
    });
  });

  overlay.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeLightbox();
  });
});
