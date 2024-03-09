
// 모바일 토글

document.getElementById("btn").addEventListener("click", function () {
  var gnb = document.querySelector(".gnb");
  gnb.classList.toggle("act");
  this.classList.toggle("change");
});




// 메인 스와이퍼

var mainswiper = new Swiper("#mainslide .swiper", {
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: "#mainslide .swiper-button-next",
    prevEl: "#mainslide .swiper-button-prev",
  },
  pagination: {
    el: "#mainslide .swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});



// 슬라이드


$('.swiper').each(function (index) {
  t = $(this);
  t.addClass('swiepr-' + index);

  let swiper = new Swiper(t, {
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 5000,
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 3,
  });
});