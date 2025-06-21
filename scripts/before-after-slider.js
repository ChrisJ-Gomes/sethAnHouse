document.querySelectorAll('.before-after-slider').forEach(container => {
  const slider = container.querySelector('.before-after-slider__slider');
  
  slider.addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
  });
});
