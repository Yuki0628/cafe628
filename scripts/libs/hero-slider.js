class HeroSlider {
  constructor() {
    this.swiper = new Swiper('.swiper', {
      loop: true,
      grabCursor: true,
      spaceBetween: 30,
      effect: 'slide',
      // centeredSlides: true,
      slidesPerView: 1,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}
