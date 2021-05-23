'use strict';

const buttons = document.querySelectorAll('.show-modal'),
  modals = document.querySelectorAll('.modal'),
  btnCloseModal = document.querySelectorAll('.close-modal'),
  overlay = document.querySelector('.overlay');

// Closing function
function closeModalFun() {
  modals.forEach(v => {
    v.classList.add('hidden');
  });
  overlay.classList.add('hidden');
}

// Opening function
buttons.forEach((v, k) => {
  v.onclick = () => {
    modals[k].classList.remove('hidden');
    overlay.classList.remove('hidden');
  };
});

// Close button function
btnCloseModal.forEach((v, k) => {
  v.onclick = () => {
    closeModalFun();
  };
});

// Closing the Modal with pressing in the overlay function
overlay.onclick = () => {
  closeModalFun();
};

// closing the model on pressing in ESC key from the keyboard
document.onkeydown = e => {
  if (e.key === 'Escape') {
    modals.forEach(v => {
      if (!v.classList.contains('hidden')) {
        closeModalFun();
      }
    });
  }
};
