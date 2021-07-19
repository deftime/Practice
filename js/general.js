window.onload = function() {
  openMenu.init();
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
