// export const num = 10;

console.log("Script are ready to execting..........");

const availableChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789@#$&";

const numberLength = 5;


function generateNumber(){
     let randomNumber = "";

     for(let i = 0; i<numberLength; i++){
          const index = Math.floor(Math.random()*availableChar.length);
     
          console.log(index);
          randomNumber += availableChar[index];
     }
     return randomNumber;
}

// add dynamic into login page
const capchaCode = document.getElementsByClassName("capcha-code");
console.log(capchaCode);

// assign a value into variable
let capchaCodeValue = generateNumber();
// console.log(randomNumber);

// assign a value
capchaCode[0].innerHTML = capchaCodeValue;
capchaCode[1].innerHTML = capchaCodeValue;

// reference a code 
const reference = document.getElementsByClassName("refrence-capcha-code");

for( let item of reference ){
     item.addEventListener("click", () => {
          capchaCodeValue = "";
          capchaCodeValue = generateNumber();
          console.log(capchaCodeValue);
          capchaCode[0].innerHTML = capchaCodeValue;
          capchaCode[1].innerHTML = capchaCodeValue;
     }
)};


console.log("Script are end to execting..........");