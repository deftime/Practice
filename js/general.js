window.onload = function() {
  openMenu.init();
  runAOS();
}

const openMenu = {
  menuBtn: document.querySelector('.menu .btn'),
  init() {
    this.menuBtn.addEventListener('click', (event)=>{
      this.menuBtn.classList.toggle('active');
      this.menuBtn.parentElement.classList.toggle('open');
    })
  }
}

function runAOS() {
  AOS.init({
    offset: 300,
    delay: 0,
    duration: 400
  })
}
