class Keypad {
  constructor() {

  }


  createHeader() {
    return `<header class="header"><div class="container top-radius"><h2>Keypad</h2></div></header>`;
  }


  createMain() {
    return `<main class = "main keypad"><div class="container">
			<div class="number">
				<span id = "addUser" class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
				<span class ="numbers"></span>
				<span id = "deleteNumber" class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
			</div>
			<div class="keypad-holder">
				<button class="key">1</button>
				<button class="key">2</button>
				<button class="key">3</button>
				<button class="key">4</button>
				<button class="key">5</button>
				<button class="key">6</button>
				<button class="key">7</button>
				<button class="key">8</button>
				<button class="key">9</button>
				<button class="key">*</button>
				<button class="key">0</button>
				<button class="key">#</button>
				<button class="key"> <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>
			</div>
		</div>
	</main>`
  }

  transformPhoneNumber(element, char) {
    if (element.textContent.length < 15) {
      if (!element.textContent) {
        element.textContent += '(' + char;
      } else if (element.textContent.length == 4) {
        element.textContent += ')-' + char;
      } else if (element.textContent.length == 8 || element.textContent.length == 11) {
        element.textContent += '-' + char;
      }
      else {
        element.textContent += char;
      }
    }
  }

  events() {
    this.body = document.querySelector('body');
    this.keypad = document.querySelector('.keypad-holder');
    this.numbers = document.querySelector('.numbers');
    this.deleteNumber = document.getElementById('deleteNumber');
    this.addUser = document.getElementById('addUser');

    this.addUser.addEventListener('click', e => {
      let phone = this.numbers.textContent;
      myAddUser.render(phone);
    });

    this.keypad.addEventListener('click', e => {
      if (e.target.classList.contains('key')) {
        this.transformPhoneNumber(this.numbers, e.target.textContent);
      }
    });

    // ----- Add ability to use keyboard to type and delete numbers--//
    document.body.addEventListener('keydown', (e) => {
      if (Number(e.key) >= 0 || e.key == '*' || e.key == '#') {
        this.transformPhoneNumber(this.numbers, e.key);
      }
      if (e.key == 'Backspace') {
        this.deleteNumbers(this.numbers)
      }
    })
  }


  render() {
    this.app = document.getElementById('app');
    if (this.app) {
      this.app.innerHTML = this.createHeader() + this.createMain();
      this.events();
    } else {
      this.app = document.createElement('div');
      document.body.prepend(this.app);
      this.app.id = 'app';
      this.app.innerHTML = this.createHeader() + this.createMain();
      this.events();
    }
  }
}
let myKeypad = new Keypad();