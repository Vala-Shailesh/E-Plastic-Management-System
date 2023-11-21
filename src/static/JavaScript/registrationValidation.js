// it help to validated proper detail that are inserted by user

// get all parameter form user that are add for registration
const role = document.getElementsByName("role")[1];
const name = document.getElementsByName("regisUserName")[0];
const email = document.getElementsByName("regisUserEmail")[0];
const contactNo = document.getElementsByName("regisUserConnectNo")[0];
const pass = document.getElementsByName("regisPassword")[0];
const confirmPass = document.getElementsByName("regisConfirmPassword")[0];

// event starting point
const regisForm = document.getElementsByClassName("pop-up-registration-form")[0];
const sumbitBtn = document.getElementsByClassName("regis-btn");
const invalid = document.getElementsByClassName("invalid");
// console.log(role, name, email, contactNo, pass, confirmPass );

console.log(invalid[0]);
console.log(regisForm);
// code validation user registration request with proper manner
for( let item of sumbitBtn){
     item.addEventListener("click", (e) => {
          if( pass.value !== confirmPass.value){
               // for(let item of invalid){
               //      item.style.display = "block";     
               // }
               invalid[0].style.display = "block";
               regisForm.style.height = "640px";
               regisForm.reset();  
               e.preventDefault();
          }
     });
}