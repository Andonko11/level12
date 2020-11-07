// Option 2 - jQuery Smooth Scrolling
//    $('.navbar a').on('click', function (e) {
//      if (this.hash !== '') {
//        e.preventDefault();

//        const hash = this.hash;

//        $('html, body')
//          .animate({
//            scrollTop: $(hash).offset().top
//          },800);
//      }
//  });


// Option 3 Java Script scrolling
    const scroll = new SmoothScroll('.nav-links a[href*="#"]', {
    speed: 1400
    });