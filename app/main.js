const manuToggle = document.querySelector('.menu-icon')
const showcase = document.querySelector('.sidenav')
const body = document.querySelector('.main-section')
const smallNav =document.querySelector('.sidenav-small')

manuToggle.addEventListener('click', () => {
  manuToggle.classList.toggle('active')
  showcase.classList.toggle('active')
  smallNav.classList.toggle('smallnavactive')
  body.classList.toggle('main-active')
  console.log('hello')
});


//create
const objcl = document.querySelector('.tow')
const obj = document.querySelector('.upload-option')

objcl.addEventListener('click', () => {
  obj.classList.toggle('up-active')
  console.log('create activated')
})


//notification
const notclick = document.querySelector('.one')
const notact = document.querySelector('.notification-body')

notclick.addEventListener('click', () => {
  notact.classList.toggle('nb-active')
  console.log('notification activated')

})
//user option
const uab = document.querySelector('.three')
const ub = document.querySelector('.prifile-body')
uab.addEventListener('click', () => {
   ub.classList.toggle('pbactive')
})

//loading animation

function hideLoadingDiv() {
  setTimeout(function () {
    document.querySelector('.loading-page').classList.add('hidden');
    console.log('page loaded')
  }, 4000)

}
const loadingBorder = document.getElementById("loading-border");

window.addEventListener("load", function() {
  loadingBorder.style.transform = "translateX(0%)";
  setTimeout(function() {
    loadingBorder.style.display = "none";
  }, 1000);
});


