var viewBtn = $(".view-page");
var mainContent = $(".main-content");
var startPg = $(".start-page");

viewBtn.click(function () {
  mainContent.addClass("animated fadeInUp");
  mainContent.attr("style", "display: block");
  startPg.attr("style", "display: none");
});

var slideOneBtn = $("li[data-slide-to='0']");
var portImgOne = $("#port-item-1");

var slideTwoBtn = $("li[data-slide-to='1']");
var portImgTwo = $("#port-item-2");

var slideThreeBtn = $("li[data-slide-to='2']");
var portImgThree = $("#port-item-3");

//display slide on click
slideOneBtn.click(function () {
  console.log("button one works");
  slideOneBtn.addClass("active");
  slideTwoBtn.removeClass("active");
  slideThreeBtn.removeClass("active");
  portImgOne.addClass("active");
  portImgTwo.removeClass("active");
  portImgThree.removeClass("active");
});

slideTwoBtn.click(function () {
  slideTwoBtn.addClass("active");
  slideOneBtn.removeClass("active");
  slideThreeBtn.removeClass("active");
  portImgTwo.addClass("active");
  portImgOne.removeClass("active");
  portImgThree.removeClass("active");
});

slideThreeBtn.click(function () {
  slideThreeBtn.addClass("active");
  slideTwoBtn.removeClass("active");
  slideOneBtn.removeClass("active");
  portImgThree.addClass("active");
  portImgTwo.removeClass("active");
  portImgOne.removeClass("active");
});

//display contact modal on click
$(".contact").click(function () {
  $(".modal").attr("style", "display:block;");


});

$(".exit-modal").click(function () {
  $(".modal").attr("style", "display:none;");
});
