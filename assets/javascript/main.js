let swiperCards = new Swiper('.todos_cards', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    slidesPerView: 3,

    //If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    // breakpoints:{
    //     600:{
    //         slidesPerView: 2, 
    //     }
    // }

});