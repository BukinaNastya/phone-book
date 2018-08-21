let links = [...document.querySelectorAll('.main-nav>a')];

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    let href = link.href;
    this.state = this.app.innerHTML;
    links.forEach(elem => {
      elem.classList.remove('active');
    });
    if (link.getAttribute('href') == 'index.html') {
      console.log(state);
      myTelephoneBook.render();
      history.pushState(this.state, href, href);
    }
    if (link.getAttribute('href') == 'keypad.html') {
      myKeypad.render();
      history.pushState(this.state, href, href);
    }
    if (link.getAttribute('href') == 'add-user.html') {
      myAddUser.render();
      history.pushState(this.state, href, href);
    }
  })

})
window.addEventListener('popstate', function (event) {
 // console.log(event);
})