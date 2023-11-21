// console.log("script are connecting successfully........");

const admin = document.querySelector(".admin");
const customer = document.querySelector(".customer");
const worker = document.querySelector(".worker");
const industry = document.querySelector(".industry");

console.log( admin , "\n" , customer, "\n" , worker, "\n", industry);

const target = document.querySelector("#control-text");

console.log(target.value, typeof target.innerHTML);
console.log(target.value === "customer");

if( target.value === "admin" ){
     admin.style.display = "inline";
}
else if( target.value === "customer") {
     customer.style.display = "inline";
}
else if( target.value === "worker") {
     worker.style.display = "inline";
}
else if( target.value === "industry"){
     industry.style.display = "inline";
}
else{
     industry.style.display = "inline";
}

// some dynamic control for profile page's
const customers = document.querySelectorAll("div.customer");
const workers = document.querySelectorAll("div.worker");
const industries = document.querySelectorAll("div.industry");

if( target.value === "customer"){
     for(let item of customers){
          item.style.display = "inline-block";
     }
}
else if( target.value === "worker"){
     for(let item of workers){
          item.style.display = "inline-block";
     }
}
else if( target.value === "industry"){
     for(let item of industries){
          item.style.display = "inline-block";
     }
}
else{
     console.log("user not have any permission..");
}