console.log("Scripting are connected.....!");

const forms = document.forms;
const enteredOTP = document.querySelector("#otp");
console.log(forms);

// get OTP that can sent by server
const otp = document.querySelector("#otp-box").value;
// console.log(otp);

// handle control of forms
forms[1].style.display = "none";

// check otp is valid or not
forms[0].addEventListener("submit", (e) => {
     e.preventDefault();

     // get user entered otp
     const userOTP = enteredOTP.value;
     console.log(userOTP);

     // console.log(userOTP === otp);
     if( userOTP === otp ){
          forms[1].style.display = "flex";
     }
     else{
          console.log(enteredOTP);
          enteredOTP.value = "";
     }
});
