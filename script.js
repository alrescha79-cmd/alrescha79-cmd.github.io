window.onscroll=function(){const e=document.querySelector("header"),t=e.offsetTop,n=document.querySelector("#to-top");window.pageYOffset>t?(e.classList.add("navbar-fixed"),n.classList.remove("hidden"),n.classList.add("flex")):(e.classList.remove("navbar-fixed"),n.classList.remove("flex"),n.classList.add("hidden"))};const hamburger=document.querySelector("#hamburger"),navMenu=document.querySelector("#nav-menu");hamburger.addEventListener("click",(function(){hamburger.classList.toggle("hamburger-active"),navMenu.classList.toggle("hidden")})),window.addEventListener("click",(function(e){e.target!=hamburger&&e.target!=navMenu&&(hamburger.classList.remove("hamburger-active"),navMenu.classList.add("hidden"),e.target==btnDropdown&&(hamburger.classList.add("hamburger-active"),navMenu.classList.remove("hidden")))}));const btnDropdown=document.querySelector("#btn-dropdown"),dropdown=document.querySelector("#dropdown");btnDropdown.addEventListener("click",(function(){dropdown.classList.toggle("hidden")}));const btnDropdown1=document.querySelector("#btn-dropdown1"),dropdown1=document.querySelector("#dropdown1");btnDropdown1.addEventListener("click",(function(){dropdown1.classList.toggle("hidden")})),window.addEventListener("click",(function(e){e.target!=btnDropdown1&&e.target!=dropdown1&&(btnDropdown1.classList.remove("hidden"),dropdown1.classList.add("hidden"))}));const gagal=document.querySelector(".alert-gagal"),myAlert=document.querySelector(".my-alert"),close=document.querySelector(".btn-close");close.addEventListener("click",(function(){myAlert.classList.toggle("hidden")}));const scriptURL="https://script.google.com/macros/s/AKfycbw8-8ztvVelG4inRlvfEf7qqy-EYd6V1xtG8DGrm98TqZv1CBziT7mGeWGuCVdbDEoHyw/exec",form=document.forms["submit-to-google-sheet"],btnKirim=document.querySelector(".btn-kirim"),btnLoading=document.querySelector(".btn-loading");form.addEventListener("submit",(e=>{e.preventDefault(),btnLoading.classList.toggle("invisible"),btnKirim.classList.toggle("invisible"),fetch(scriptURL,{method:"POST",body:new FormData(form)}).then((e=>{btnLoading.classList.toggle("invisible"),btnKirim.classList.toggle("invisible"),myAlert.classList.toggle("hidden"),gagal.classList.add("hidden"),form.reset(),console.log("Success!",e)})).catch((e=>{console.error("Error!",e.message),btnLoading.classList.toggle("invisible"),btnKirim.classList.toggle("invisible"),gagal.classList.add("hidden")}))}));