const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');


modalBtn.addEventListener('click', () => {
  modalOverlay.classList.add('show-modal');
});

closeBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('show-modal');
});


modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('show-modal');
  }
});
