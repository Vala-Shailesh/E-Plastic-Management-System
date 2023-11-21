console.log("Scripting are starting at now....");

const img = document.getElementsByClassName("img");
const dot = document.getElementsByClassName("dot_items");

// console.log(img);
// console.log(dot);

function clearDot(){
     console.log("calling right now...");
     for( let item of dot){
          item.style.backgroundColor = "transparent";
     }
}

for(const item of dot) {
     item.addEventListener("click", () => {
          clearDot();
          item.style.backgroundColor = "green";
     });
};

// for background images
for(const item of img){
     const info = item.getBoundingClientRect();
     console.log(info);
}
   
// navbar drop-down menu

console.log("Scripting are ending at now....");