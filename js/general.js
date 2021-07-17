class User {
  constructor (login, pass) {
    this.login = login;
    this.pass = pass;
  }
  reg() {
    localStorage.setItem(this.login, this.pass);
  }
  log() {
    if (localStorage.getItem(this.login) === this.pass) {
      console.log('LOG IN!');
    } else {
      console.log('Auth faild!');
    }
  }
}

class Profile extends User {
  constructor (name, email, age) {
    super();
    this.name = name;
    this.email = email;
    this.age = age;
  }
  showInfo() {
    console.log('Name: '+this.name);
    console.log('E-Mail: '+this.email);
    console.log('Age: '+this.age);
  }
}


let obj = {
  start: 0,
  fin:  12,
  line: 'dom',
  count(arg) {
    console.log(this.start);
    this.up();
    console.log(arg);
  },
  up() {
    this.fin += 1;
  }
}
