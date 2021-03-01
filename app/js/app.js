document.addEventListener("DOMContentLoaded", function () {

  ;(function ($) {

    $('.slick').slick({
      infinite: true,
      arrows: false,
      dots: true,
      customPaging: function (slider, i) {
        return '<div class="slider-dot"></div>';
      },
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]

    });

    $(".nav-menu-btn").click(function () {
      $(".nav-menu").toggleClass("active");
    });

    // $(".product__cta").click((e)=>{
    //   console.log(e.target.getAttribute("data-product"));
    // });


    //var magnificPopup = $.magnificPopup.instance;
    // $(".product__cta").click((e)=>{
    //   console.log(e.target.getAttribute("data-product"));
    // });

  $('.product__cta').magnificPopup({
    items: {
        src: '#my-popup',
        type: 'inline'
    },
    callbacks: {
      elementParse: function(item) {
        // Function will fire for each target element
        // "item.el" is a target DOM element (if present)
        // "item.src" is a source that you may modify
        //console.log(this.st.el);
        //console.log(this.ev);
        //console.log(this.ev[0].getAttribute('data-product')); // Do whatever you want with "item" object
        const productId = this.st.el[0].getAttribute('data-product');
        const product = products.data.find(x => x.id === productId);
        console.log(productId);
        console.log(products.data.find(x => x.id === productId));
        $('.my-popup__header').text(product.name);
      }
    }
  });

  }(jQuery));

});