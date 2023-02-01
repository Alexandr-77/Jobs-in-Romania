// 
// ================================================== 
let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__block-nav');


burger.addEventListener('click', rotateBurger); 

function rotateBurger() {
  
  burger.classList.toggle('burger-active');

  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }

}

// ===========================================

// ===============================================

// let animationNum = document.querySelector('#reliably__box');

// animationNum.addEventListener('click', showAnimation);

// function showAnimation() {
  
// }

