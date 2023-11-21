console.log("scripting are starting at now.....");
     
// get parameter for add event listener
const btnForLogin = document.querySelector("#on-login");         
const btnForLoginToRegistration = document.querySelector("#on-login-to-registration");
const btnForRegistrationToLogin = document.querySelector("#on-registration-to-login");

// get paramater for prefrom event's
const loginForm = document.querySelector(".login-form");
const registrationForm = document.querySelector(".registration-form");

console.log(btnForLogin);
console.log(btnForLoginToRegistration);
console.log(btnForRegistrationToLogin);

btnForLogin.addEventListener("click" , (e) => {
     e.preventDefault();
     loginForm.style.display = "block";     
     loginForm.style.transform = "scale(1)";  
     btnForLogin.style.display = "none";   
});

btnForLoginToRegistration.addEventListener("click", (e) => {
     e.preventDefault();
     registrationForm.style.display = "block";
     registrationForm.style.transform = "scale(1)";
     loginForm.style.display = "none";
     loginForm.style.transform = "scale(0)";
});

btnForRegistrationToLogin.addEventListener("click", (e) => {
     e.preventDefault();
     loginForm.style.display = "block";
     loginForm.style.transform = "scale(1)";
     registrationForm.style.display = "none";
     registrationForm.style.transform = "scale(0)";
});

// handler pop-up event
// const popUp = document.querySelector(".pop-up-form");
// const visibility = document.querySelector(".visibility");
// const popUpCloseBtn = document.querySelector(".pop-up-close-btn");
// const popUpOpenBtn = document.querySelector(".pop-up-open-btn");

// // login btn scripting 
// popUpOpenBtn.addEventListener("click", () => {
//      popUp.style.display = "flex";
//      popUp.style.opacity = "1";
//      visibility.style.opacity = ".4";
//      visibility.style.pointerEvents = "none";
//      visibility.style.position = "fixed";
// });

// popUpCloseBtn.addEventListener("click", () => {
//      popUp.style.display = "none";
//      visibility.style.opacity = "1";
//      visibility.style.pointerEvents = "all";
//      visibility.style.position = "static";
// });

console.log("scripting are ending at now.....");