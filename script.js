let examplePic = document.querySelector(".example__pic")

examplePic.addEventListener("click", function () {
    examplePic.classList.toggle("picture_clicked")

})

let burger = document.querySelector("#burger");
let header = document.querySelector("#header");
let headerWrapper = document.querySelector(".header__wrapper");
let burgerLine1 = document.querySelector(".burger__line_1");
let burgerLine2 = document.querySelector(".burger__line_2");
let burgerLine3 = document.querySelector(".burger__line_3");

burger.addEventListener("click", function () {
    header.classList.toggle("active-header");
    headerWrapper.classList.toggle("active-header-wrapper");
    burgerLine1.classList.toggle("active1");
    burgerLine2.classList.toggle("active2");
    burgerLine3.classList.toggle("active3");
})