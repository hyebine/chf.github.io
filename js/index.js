AOS.init();

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





//  공지사항

$(document).ready(function () {
  $('.noticetxt').click(function (e) {
    e.preventDefault();
    $(this).next('.content').toggleClass('d-none');
    $(this).find('.bi-arrow-right-short').toggleClass('open');
  });
});


// 하단

$(document).ready(function () {
  $('.familya').click(function (e) {
    e.preventDefault();
    $(this).siblings('.ft_list').toggleClass('open');
    $(this).find('.bi-chevron-down').toggleClass('open');
  });
});


// 탑버튼
$(window).scroll(function () {

  if ($(this).scrollTop() > 100) {
    $("#tobtn").addClass("on");
  }
  else {
    $("#tobtn").removeClass("on");
  }

});

$("#tobtn").click(function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});