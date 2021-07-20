window.onload = function() {
  openMenu.init();
  activNavList.buildList();
  activNavList.runObserver();
  progressBar.runObserver();
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

const activNavList = {
  articles: document.querySelectorAll('.articles .item'),
  listBox: document.querySelector('.nav-list'),
  observerOptions: {
    threshold: 0.5
  },
  buildList() {
    this.articles.forEach((item, index) => {
      item.id = `sec-${index}`;
      let a = document.createElement('a');
      a.setAttribute('href', `#${item.id}`);
      a.innerText = item.querySelector('.title').innerText;
      this.listBox.append(a);
    });
  },
  runObserver() {
    let observer = new IntersectionObserver((entires, observer)=>{
      entires.forEach(entry => {
        let title = entry.target.querySelector('.title');
        let a = this.listBox.querySelector(`a[href='#${title.parentNode.id}']`);
        if (entry.isIntersecting) {
          a.classList.add('activ');
        } else {
          a.classList.remove('activ');
        }
      });
    }, this.observerOptions);

    this.articles.forEach(item => {
      observer.observe(item);
    });
  }
}

const progressBar = {
  articles: document.querySelectorAll('.articles .item'),
  bar: document.querySelector('.progress'),
  observerOptions: {
    threshold: 0.5
  },
  runObserver() {
    let step = Math.floor(100 / this.articles.length);
    let fill = 0;
    let observer = new IntersectionObserver((entires, observer)=>{
      entires.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry.target);
          entry.boundingClientRect.top >= 0 ? fill += step : fill -= step;
          this.bar.style.width = `${fill}%`;
        }
      });
    }, this.observerOptions);

    this.articles.forEach(item => {
      observer.observe(item);
    });
  }
}

function runAOS() {
  AOS.init({
    offset: 300,
    delay: 0,
    duration: 400
  })
}
