//mobile-button

const mobileButton = document.querySelector('.header__mobile-button');
const mobileMenu = document.querySelector('.mobile');
const headerContainer = document.querySelector('.header__container');

mobileButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  mobileButton.classList.toggle('header__mobile-button--open');
  mobileMenu.classList.toggle('mobile--open');
  headerContainer.classList.toggle('header__container--open');
});


// modal

const modalButtons = document.querySelectorAll('#modal-button');
const modal = document.querySelector('#modal');
const requestWrapper = document.querySelector('.request--modal .request__wrapper');
// const submitButton = document.querySelector('#modal-submit-button');

modalButtons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.toggle('request--open');

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modal.classList.toggle('request--open');
      }
    }, { once: true });

  });
});

modal.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(requestWrapper);
  if (!withinBoundaries) {
    modal.classList.toggle('request--open');
  }
});


// closing modal when submit (not testing)

// submitButton.addEventListener('submit', () => {
//   modal.classList.toggle('request--open');
// });


// modal-watsapp

const modalButtonsWhatsapp = document.querySelectorAll('#modal-button-whatsapp');
const modalWhatsapp = document.querySelector('#modal-whatsapp');
const requestWrapperWhatsapp = document.querySelector('.request--whatsapp .request__wrapper');
// const submitButtonWhatsapp = document.querySelector('#modal-whatsapp-submit-button');

modalButtonsWhatsapp.forEach((button) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalWhatsapp.classList.toggle('request--open');

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modalWhatsapp.classList.toggle('request--open');
      }
    }, { once: true });

  });
});

modalWhatsapp.addEventListener('click', (ev) => {
  const withinBoundaries = ev.composedPath().includes(requestWrapperWhatsapp);
  if (!withinBoundaries) {
    modalWhatsapp.classList.toggle('request--open');
  }
});


// closing modal when submit (not testing)

// submitButtonWhatsapp.addEventListener('submit', () => {
//   modal.classList.toggle('request--open');
// });
