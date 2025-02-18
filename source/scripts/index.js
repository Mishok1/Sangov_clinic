//swiper

import Swiper from '../vendor/swiper-11.1.7/package/swiper-bundle.mjs';


const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  speed: 5000,
  freeMode: {
    enabled: true,
    sticky: true,
  },
  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    1440: {
      slidesPerView: 5,
    },

  },
});

const swiper3 = new Swiper('.swiper3.swiper', {
  slidesPerView: 1,
  loop: true,
  speed: 5000,
  freeMode: {
    enabled: true,
    sticky: true,
  },
  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    1440: {
      slidesPerView: 4,
    },

  },
});


//swiper end


//MOBILE BUTTON

const mobileButton = document.querySelector('.header__mobile-button');
const mobileMenu = document.querySelector('.mobile');
const headerContainer = document.querySelector('.header__container');

mobileButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  mobileButton.classList.toggle('header__mobile-button--open');
  mobileMenu.classList.toggle('mobile--open');
  headerContainer.classList.toggle('header__container--open');
});


// MODAL


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


// MODAL WHATSAPP


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


// LISENCE


const licenseModal = document.querySelector('#big-image');
const licenseImage = document.querySelectorAll('#license-image');
const bigImagePicture = document.querySelector('#big-image_picture');

if (bigImagePicture) {
  licenseImage.forEach((image) => {
    image.addEventListener('click', (evt) => {
      evt.preventDefault();
      const imageSrc = evt.target.src;
      bigImagePicture.src = imageSrc;

      licenseModal.classList.toggle('big-image--open');

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          licenseModal.classList.toggle('big-image--open');
        }
      }, { once: true });

    });
  });

  licenseModal.addEventListener('click', () => {
    licenseModal.classList.toggle('big-image--open');
  }
  );
}


//QUESTIONS


const questionsItem = document.querySelectorAll('#questions-item');

if (questionsItem) {
  questionsItem.forEach((item) => {
    item.addEventListener('click', () => {
      const currentAnswer = item.querySelector('#questions-answer');

      item.classList.toggle('questions__item--open');
      currentAnswer.classList.toggle('questions__answer--open');
    });
  });
}
