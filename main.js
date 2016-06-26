window.addEventListener("load", function () {

  var storageLogin = localStorage.getItem('login');
  var manage = document.querySelector('.manage');
  var sb = document.querySelector('#sBtn');
  var sf = document.querySelector('.search');
  var enterBtn = document.querySelector('.enter');
  var enterForm = document.querySelector('.login');
  var email = document.querySelector('.email');
  var pass = document.querySelector('.password');
  var cartBtn = document.querySelector('.cart');
  var cartForm = document.querySelector('.content');
  var visible;

  manage.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  cartBtn.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    visible = document.querySelector('.show');
    cartForm.classList.toggle('show');
    if (visible) {
      visible.classList.remove('show');
    }
  });

  sb.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    visible = document.querySelector('.show');
    sf.classList.toggle('show');
    if (visible) {
      visible.classList.remove('show');
    }
  });

  enterForm.addEventListener('submit', function () {
    if (!email.value || !pass.value) console.log('login or pass is empty');
    else localStorage.setItem('login', email.value);
  });

  enterBtn.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    visible = document.querySelector('.show');
    enterForm.classList.toggle('show');
    if (storageLogin) {
      email.value = localStorage.getItem('login');
      pass.focus();
    }
    else  email.focus();
    if (visible) {
      visible.classList.remove('show');
    }
  });

  document.body.addEventListener('click', function () {
    visible = document.querySelector('.show');
    visible.classList.remove('show');
  });

  if (document.getElementById('index')) {
    var tmblr1 = document.querySelector('#tmblr1');
    var tmblr2 = document.querySelector('#tmblr2');
    var tmblr3 = document.querySelector('#tmblr3');
    var title = document.querySelector('.promo h2');
    var cbBtn = document.querySelector('.address .btn');
    var cbClose = document.querySelector('.callback i');
    var callBack = document.querySelector('.callback');
    var overlay = document.querySelector('.overlay');
    var cbSubmit = document.querySelector('.callback .btn');
    var slct;

    callBack.addEventListener('click', function (e) {
      e.stopPropagation();
    });

    cbBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      overlay.classList.add('show');
      callBack.classList.add('modal-show');
    });

    window.addEventListener('keydown', function (e) {
      if (e.keyCode === 27) {
        callBack.classList.remove('modal-show');
        overlay.classList.remove('show');
      }
    });

    overlay.addEventListener('click', function () {
      callBack.classList.remove('modal-show');
      overlay.classList.remove('show');
    });

    cbClose.addEventListener('click', function () {
      callBack.classList.remove('modal-show');
      overlay.classList.remove('show');
    });

    cbSubmit.addEventListener('click', function () {
      callBack.classList.remove('modal-show');
      overlay.classList.remove('show');
    });

    tmblr1.addEventListener('click', function () {
      slct = document.querySelector('.select');
      slct.classList.remove('select');
      tmblr1.classList.add('select');
      document.body.style.background = "#849d8f url('pics/back01.png') no-repeat center 0";
      title.innerText = 'Крем-брюле и пломбир с малиновым джемом';
    });

    tmblr2.addEventListener('click', function () {
      slct = document.querySelector('.select');
      slct.classList.remove('select');
      tmblr2.classList.add('select');
      document.body.style.background = "#8996a6 url('pics/back02.png') no-repeat center 0";
      title.innerText = 'Шоколадный пломбир и лимонный сорбет';
    });

    tmblr3.addEventListener('click', function () {
      slct = document.querySelector('.select');
      slct.classList.remove('select');
      tmblr3.classList.add('select');
      document.body.style.background = "#9d8b84 url('pics/back03.png') no-repeat center 0";
      title.innerText = 'Пломбир с помадкой и клубничный щербет';
    });
  }

});