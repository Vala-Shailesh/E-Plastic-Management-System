const loginValidationForm = document.querySelector(".pop-up-login-form");
// console.log(loginValidationForm);

// get generate random capcha code
const validCapcha = document.querySelector(".capcha-code");
console.log(validCapcha);

// get user enterd code 
const userCapcha = document.querySelectorAll(".user-capcha");
console.log(userCapcha);

// get login btn for starting validation
const loginBtn = document.querySelector(".login-btn");
// console.log(loginBtn);

// error shows
const invalidCapchaShow = document.querySelector(".invalidCode");

// now verfiy capcha code
loginBtn.addEventListener("click", (e) => {
     // console.log(validCapcha);
     // console.log(userCapcha.value);
     if(userCapcha[1].value == null){
          if( validCapcha.innerHTML !== userCapcha[0].value ){
               e.preventDefault();
               console.log(validCapcha);
               // console.log(invalidCapchaShow);
               invalidCapchaShow.style.display = "block";
          }
     }
     if(userCapcha[0].value == null){
          if( validCapcha.innerHTML !== userCapcha[1].value ){
               e.preventDefault();
               console.log(validCapcha);
               // console.log(invalidCapchaShow);
               invalidCapchaShow.style.display = "block";
          }
     }
     console.log(validCapcha);
});