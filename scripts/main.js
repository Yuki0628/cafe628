document.addEventListener('DOMContentLoaded', function () {

  new MobileMenu();
  new HeroSlider();
  
  const _inviewAnimation = function(el, inview) {
    if(inview) {
      el.classList.add('inview'); 
    }else{
      el.classList.remove('inview'); 
    }
  }
  
  const header = document.querySelector('.header');
  const _navAnimation = function(el, inview) {
    if(inview) {
      header.classList.remove('triggered'); 
    }else{
      header.classList.add('triggered'); 
    }
  }
  
  const so1 = new ScrollObserver('.cover-slide', _inviewAnimation);
  const so2= new ScrollObserver('.icon', _inviewAnimation);
  const so3 = new ScrollObserver('.menu-cover', _inviewAnimation);
  const so4 = new ScrollObserver('.nav-trigger', _navAnimation, {once: false});
  
});