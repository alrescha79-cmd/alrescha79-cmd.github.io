// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});



// Klik di luar hamburger kecuali dropdown
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
    if (e.target == btnDropdown) {
      hamburger.classList.add('hamburger-active');
      navMenu.classList.remove('hidden');
    }
  }
});


//dropdown navbar
const btnDropdown = document.querySelector('#btn-dropdown');
const dropdown = document.querySelector('#dropdown');

btnDropdown.addEventListener('click', function () {
  dropdown.classList.toggle('hidden');
})


//dropdown 
const btnDropdown1 = document.querySelector('#btn-dropdown1');
const dropdown1 = document.querySelector('#dropdown1');

btnDropdown1.addEventListener('click', function () {
  dropdown1.classList.toggle('hidden');
})


// Klik di luar dropdown 
window.addEventListener('click', function (e) {
  if (e.target != btnDropdown1 && e.target != dropdown1) {
    btnDropdown1.classList.remove('hidden');
    dropdown1.classList.add('hidden');
  }
});


//alert gagal terkirim
const gagal = document.querySelector('.alert-gagal');

//Button Close alert terkirim
const myAlert = document.querySelector('.my-alert');
const close = document.querySelector('.btn-close');

close.addEventListener('click', function () {
  myAlert.classList.toggle('hidden');
});


// Form Aktif
const scriptURL = 'https://script.google.com/macros/s/AKfycbw8-8ztvVelG4inRlvfEf7qqy-EYd6V1xtG8DGrm98TqZv1CBziT7mGeWGuCVdbDEoHyw/exec'

      const form = document.forms['submit-to-google-sheet']
      const btnKirim = document.querySelector('.btn-kirim')
      const btnLoading = document.querySelector('.btn-loading')

      //klik kirim dan muncul loading
      form.addEventListener('submit', e => {
        e.preventDefault()

        btnLoading.classList.toggle('invisible')
        btnKirim.classList.toggle('invisible')

        //terkirim, form kosong kembali dan muncul alert
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            btnLoading.classList.toggle('invisible')
            btnKirim.classList.toggle('invisible')
            myAlert.classList.toggle('hidden')
            gagal.classList.add('hidden')
            form.reset()
            console.log('Success!', response)
          })
          
          //tidak terkirim muncul alert
          .catch(error => {
            console.error('Error!', error.message)
            btnLoading.classList.toggle('invisible')
            btnKirim.classList.toggle('invisible')
            gagal.classList.add('hidden')
          })
      })

