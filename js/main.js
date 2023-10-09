// swiper-slider beginning //
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 3,
        },
        520: {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 6,
        },
        1200: {
            slidesPerView: 6,
        },
    },
});

//   swiper-slider end //

//   counter beginning//
const counts = document.querySelectorAll('.count')
const speed = 37
counts.forEach((counter) =>{
    function upData(){
        const target =Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc  = target / speed
        if(count < target){
            counter.innerText =Math.floor(inc +count)
            setTimeout(upData, 1)
        }else{
            counter.innerText = target
        }
    }
    upData()
})

//   counter end //


// swiper-cta sliader // 

var swiper = new Swiper(".cta-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 1,
        },
        1200: {
            slidesPerView: 1,
        },
    },
});


// swiper cta slider end //