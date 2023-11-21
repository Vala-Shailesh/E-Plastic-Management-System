console.log("Scripting are strating at now......");

// transfer one form to another form

// get parameter for add event listener
const btnForPopUpLoginToRegistration = document.querySelector("#pop-up-on-login-to-registration");
const btnForPopUpRegistrationToLogin = document.querySelector("#pop-up-on-registration-to-login");

// get paramater for prefrom event's
const popUploginForm = document.querySelector(".pop-up-login-form");
const popUpregistrationForm = document.querySelector(".pop-up-registration-form");

btnForPopUpLoginToRegistration.addEventListener("click", (e) => {
     e.preventDefault();
     popUpregistrationForm.style.display = "block";
     popUploginForm.style.display = "none";
     popUpregistrationForm.parentNode.style.height = "600px";
     popUpregistrationForm.style.height = "600px";
     // registrationForm.style.transform = "scale(1)";
     // loginForm.style.transform = "scale(0)";
});

btnForPopUpRegistrationToLogin.addEventListener("click", (e) => {
     e.preventDefault();
     popUploginForm.style.display = "block";
     popUpregistrationForm.style.display = "none";
     popUpregistrationForm.parentNode.style.height = "600px";
     // loginForm.style.transform = "scale(1)";
     // registrationForm.style.transform = "scale(0)";
});


// handler pop-up event
const popUp = document.querySelector(".pop-up-form");
const visibility = document.querySelector(".visibility");
const popUpCloseBtn = document.querySelector(".pop-up-close-btn");
const popUpOpenBtn = document.querySelector(".pop-up-open-btn");

document.addEventListener("DOMContentLoaded", () => {
     setTimeout( () =>{
          // console.log("page are loaded...");
          popUp.style.display = "flex";
          popUp.style.opacity = "1";
          visibility.style.opacity = ".4";
          visibility.style.pointerEvents = "none";
          visibility.style.position = "fixed";
     }, 1000);
});

popUpOpenBtn.addEventListener("click", () => {
     popUp.style.display = "flex";
     popUp.style.opacity = "1";
     visibility.style.opacity = ".4";
     visibility.style.pointerEvents = "none";
     visibility.style.position = "fixed";
});

popUpCloseBtn.addEventListener("click", () => {
     popUp.style.display = "none";
     visibility.style.opacity = "1";
     visibility.style.pointerEvents = "all";
     visibility.style.position = "static";
});

console.log("Scripting are ending at now......");