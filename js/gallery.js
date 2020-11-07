
        var swiper = new Swiper('.swiper-container', {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          },
          loop: true,
          autoplay: {
              dely: 500,
              disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
          },
        });
    