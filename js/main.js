$(function () {
  $(".toggle_btn").on("click", function () {
  $("header").toggleClass("open");
});
// メニューのリンクをクリックした時
$(".h-nav a").on("click", function () {
  $("header").toggleClass("open");
});

$(".slick-box")
.on("init", function () {
    $('.slick-slide[data-slick-index="0"]').addClass("add-anime");
})
.slick({
    fade: true,
    arrows: false,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false,
})
.on({
    beforeChange: function (event, slick, currentSlide, nextSlide) {
        $(".slick-slide", this).eq(nextSlide).addClass("add-anime");
        $(".slick-slide", this).eq(currentSlide).addClass("remove-anime");
    },
    afterChange: function () {
        $(".remove-anime", this).removeClass(
            "remove-anime add-anime"
        );
    },
});


$(".message-slide").slick({
  
  autoplay: true,//自動でスライドさせる
      autoplaySpeed: 0,//次の画像に切り替えるまでの時間 今回の場合は0
      speed: 10000,//画像が切り替わるまでの時間 今回の場合は難病で1枚分動くか
      cssEase: 'linear',//動きの種類は等速に
      slidesToShow: 3, 
      arrows:false,//左右に出る矢印を非表示
      swipe: false,//スワイプ禁止
      pauseOnFocus: false,//フォーカスが合っても止めない
      pauseOnHover: false,
      // centerMode: true,//一枚目を中心に表示させる
      // initialSlide: 3,//最初に表示させる要素の番号を指定
      // variableWidth: true,

      responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                },
            },
            
          {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            },
        },
        ],
      });
});