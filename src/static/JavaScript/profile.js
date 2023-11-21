console.log("Profile javascript are ready to excuting......");

const enable = document.querySelector("#profile-enable");
const disable = document.querySelector("#profile-disable");

console.log(enable);
console.log(disable);

// sumbt button only active then data update are enable
const sumbitBtn = document.querySelector("#profile-sumbit-btn");

// get all element that are contain a input class
const input = document.querySelectorAll(".input");
const extraInput = document.querySelectorAll(".extra-input");
console.log(input);

// default event 
for(let item of input){
     item.disabled = "ture";
     // console.log(item);
}
for(let item of extraInput){
     item.classList.remove("display-none");
     item.nextElementSibling.classList.add("display-none");
}
console.log(extraInput);

// disable sumbit btn 
sumbitBtn.disabled = "true";

// disable event
disable.addEventListener("click", () => {
     for(let item of input){
          item.disabled = "ture";
          console.log(item);
     }
     for(let item of extraInput){
          item.classList.remove("display-none");
          item.nextElementSibling.classList.add("display-none");
     }
     sumbitBtn.disabled = "true";

});

// enable event
enable.addEventListener("click", () => {
     for(let item of input){
          item.removeAttribute("disabled");
          console.log(item);
     }
     for(let item of extraInput){
          item.classList.add("display-none");
          item.nextElementSibling.classList.remove("display-none");
     }
     sumbitBtn.removeAttribute("disabled");

});
