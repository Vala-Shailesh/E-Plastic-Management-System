// import {num}  from './randomCodeGenar.js';

// console.log(num);
console.log("Scripting starting at now.....");


// variable get in JS file
const dropDown = document.getElementsByClassName("drop-down");
const dropDownItems = document.getElementsByClassName("drop-down-items");
const childDropDown = document.getElementsByClassName("child-drop-down");
const childDropDownItems = document.getElementsByClassName("child-drop-down-items");

console.log(dropDown);
console.log(dropDownItems);

for( let item of dropDown){
     item.addEventListener("click" , (e) => {
          // console.log("click me..!");
          // item.lastElementChild.classList.toggle("display");
          // HTML not give dynamically with and height 
          // item.lastElementChild.style.height = "fit-content";
          
          // visible all items that contain drop-down-items class

          //     var i = 1;
          //     console.log(item.children[0].classList.contains("drop-down-items"));
          //     console.log(item.children[1].classList.contains("drop-down-items"));
          //     console.log(item.children[2].classList.contains("drop-down-items"));
          //     console.log(item.children[3].classList.contains("drop-down-items"));
          
          for(let i = 0; item.children.length > i; i++){
               // console.log("inside for loop..");
               if(item.children[i].classList.contains("drop-down-items")){
                    item.children[i].classList.toggle("display");
                    item.children[i].style.height = "fit-content";
                    maintainEvent(item.children[i]);
               }
               // console.log(item.children[i]);
          }

          // const process = e.target.lastElementChild.firstElementChild.lastElementChild.classList;
          // console.log(process);

          e.stopPropagation();  
     });
}

for( let item of childDropDown){
     item.addEventListener("click" , (e) => {
          console.log("click me..child!");
          item.lastElementChild.classList.toggle("display");
          item.firstElementChild.classList.toggle("display");

          // HTML not give dynamically with and height 
          item.lastElementChild.style.height = "fit-content";
          e.stopPropagation();
     });
}

const maintainEvent = (element) => {
     // console.log("click me inside evvent handler....");
     if(!element.classList.contains("display")){
          console.log(element, element.classList);
          // element.childNode.lastElementChild.classList.add("display");
     }

     // e.target.lastElementChild.firstElementChild.lastElementChild.classList.add("display");
     // e.target.lastElementChild.firstElementChild.firstElementChild.classList.remove("display");
}

// empty condition handing script
const activityChidItems = document.querySelectorAll(".activity-child-item");
const main = document.querySelector(".main");

for( let item of activityChidItems){
     document.addEventListener("DOMContentLoaded", () => {
          const htmlContent = item.innerContent;
          console.log("it working right way...");
          console.log(htmlContent);
          if( htmlContent == null){
               console.log("inside a condtion...");
               // main.parentNode.classList.add("empty-item-bg");
          }
     })

}

console.log("Scripting ending at now.....");