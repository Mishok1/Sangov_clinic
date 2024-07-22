// import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';


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


//slider

// new Glide('.glide', {
//   perView: 1
// }).mount({ Controls, Breakpoints });


{/* <div class="glide">
<div data-glide-el="track" class="glide__track">
  <ul class="glide__slides">
    <li class="glide__slide">
      <img class="rating__image" src="images/google.png" width="180" height="60" alt="Google.">
    </li>
    <li class="glide__slide">
      <img class="rating__image" src="images/yandex.png" width="180" height="60" alt="Google.">
    </li>
    <li class="glide__slide">
      <img class="rating__image" src="images/2gis.png" width="180" height="60" alt="Google.">
    </li>
    <li class="glide__slide">
      <img class="rating__image" src="images/zoon.png" width="180" height="60" alt="Google.">
    </li>
    <li class="glide__slide">
      <img class="rating__image" src="images/prodoctorov.png" width="180" height="60" alt="Google.">
    </li>
  </ul>
  <div class="glide__arrows" data-glide-el="controls">
    <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
    <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
  </div>
</div>
<div class="glide__bullets" data-glide-el="controls[nav]">
  <button class="glide__bullet" data-glide-dir="=0"></button>
  <button class="glide__bullet" data-glide-dir="=1"></button>
  <button class="glide__bullet" data-glide-dir="=2"></button>
</div>
</div>
<div data-glide-el="controls">
<button data-glide-dir="<<">Start</button>
<button data-glide-dir=">>">End</button>
</div> */}
