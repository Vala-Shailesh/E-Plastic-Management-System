// first get a main container for add data into that
const mainContainer = document.querySelector(".activity-items.drop-down");
console.log(mainContainer);

// get how many data are avaliable in database
const oldDataLength = document.querySelector("#numberOfOldData");
console.log(oldDataLength.value);

// get old data that are avaliable in databaser
const oldData = document.querySelector("#OldData");
const data = JSON.parse(oldData.value);
// console.log(data);

// check role of user
const role = document.querySelector("#role");

// checking valid json to object covertion
// console.log(" data type of database", typeof (data));
// console.log(data[0].status);

// add child into mainContainer using appendChild method
for (let i = 0; i < oldDataLength.value; i++) {
     
     console.log("inside a for loop ->");

     // create a new node for every data
     const newNode = document.createElement("div");

     // add content into new node
     newNode.innerHTML = ` <div class="child-drop-down">
                              <div class="service-container">
                                   <div class="t-m-0-5em flex-space-between f-s-madiam">
                                        <div class="inline">
                                             <h4 class="inline"> Subject : </h4>
                                             <span class="f-s-small f-w-400"> ${data[i].subjectName} </span>
                                        </div>
                                   </div>
                              </div>
                              <div class="child-drop-down-items service-container display">
                                   <div class="service-container-header t-m-0-5em flex-space-between f-s-madiam">
                                        <div class="inline">
                                             <h4 class="inline"> Subject : </h4>
                                             <span class="f-s-small f-w-400">  ${data[i].subjectName}  </span>
                                        </div>
                                        <div class="inline">
                                             <h4 class="inline"> Service Id : </h4>
                                             <span class="f-s-small f-w-400"> 1 </span>
                                        </div>
                                        <div class="inline">
                                             <h4 class="inline"> Date : </h4>
                                             <span class="f-s-small f-w-400"> 2 May, 2023 </span>
                                        </div>
                                   </div>
                                   <div class="service-container-main t-m-1em f-s-small">
                                        <div class="block">
                                             <h4 class="r-m-1em inline f-w-550"> Customer name : </h4>
                                             <span class="f-s-small f-w-400">   ${data[i].name}   </span>
                                        </div>
                                        <div class="block v-m-0-5em">
                                             <h4 class="r-m-1em inline"> Customer moblie no : </h4>
                                             <span class="f-s-small f-w-400">   ${data[i].connectNo}  </span>
                                        </div>
                                        <div class="block v-m-0-5em">
                                             <h4 class="inline r-m-1em"> Customer E-mail : </h4>
                                             <span class="f-s-small f-w-400">  ${data[i].email} </span>
                                        </div>
                                        <div class="block v-m-0-5em">
                                             <h4 class="inline r-m-1em"> Customer address : </h4>
                                             <span class="f-s-small f-w-400"> ${data[i].address}  </span>
                                        </div>
                                        <hr class="v-m-1em" />
                                        <div class="block v-m-0-5em">
                                             <h4 class="inline r-m-1em"> Plastic type : </h4>
                                             <span class="f-s-small f-w-400"> ${data[i].plasticType} </span>
                                        </div>
                                        <div class="block v-m-0-5em">
                                             <h4 class="inline r-m-1em"> Plastic weight (approx.) : </h4>
                                             <span class="f-s-small f-w-400">  ${data[i].plasticWeight}  </span>
                                        </div>
                                        <div class="block">
                                             <h4 class="w-100px"> Details :: </h4>
                                             <span class="f-s-small f-w-400"> ${data[i].plasticDetail} </span>
                                        </div>
                                        <hr class="v-m-1em" />
                                        <div class="flex-space-between w-50">
                                             <div class="inline v-m-0-5em">
                                                  <h4 class="inline r-m-1em"> Requset date : </h4>
                                                  <span class="f-s-small f-w-400"> 1 may ,2023 </span>
                                             </div>
                                             <div class="block v-m-0-5em">
                                                  <h4 class="inline r-m-1em"> Requset time : </h4>
                                                  <span class="f-s-small f-w-400"> 01 : 30 AM </span>
                                             </div>
                                        </div>
                                        <div class="block v-m-0-5em">
                                             <h4 class="inline r-m-1em"> Requset status : </h4>
                                             <span class="f-s-small f-w-400"> ${data[i].status} </span>
                                        </div>
                                   </div>
                                   <div class="service-container-header t-m-1em f-s-madiam removeBtn">
                                        <div class="w-90 f-s-small">
                                             <form action="/service/currentService/removeService" method="post">
                                                  <input type="hidden" name="serviceId" value="${data[i]._id}" required>
                                                  <button type="sumbit" class="btn btn-right top-1em-transfer danger"> Cancel </button>
                                             </form>
                                        </div>
                                   </div>
                                   <div class="service-container-header acceptedReq b-m-1em">
                                        <div class="w-95 f-s-small flex flex-direction-reverse">
                                             <form action="./acceptService" method="post">
                                                  <input type="hidden" name="serviceId" value="${data[i]._id}" required>
                                                  <button type="submit" class="btn primary"> Accepted </button>
                                             </form>
                                             <form action="./removeService" method="post" class="r-m-2em">
                                                  <input type="hidden" name="serviceId" value="${data[i]._id}" required>
                                                  <button type="submit" class="btn danger"> Cancel </button>
                                             </form>
                                        </div>
                                   </div>
                              </div>
                         </div>`;

     newNode.classList.add("drop-down-items");
     newNode.classList.add("activity-child-item");
     newNode.classList.add("display");
     console.log(newNode.classList);

     console.log(newNode);
     mainContainer.appendChild(newNode);             
     
     const removeBtn = document.querySelectorAll(".removeBtn");
     console.log("inside a loop -> ",removeBtn);
     if(data[i].status === "accepted" || role === "worker"){
          for( let item of removeBtn){
               item.style.display = "none";
          }
     }

     // function for set control according to user type
    
     const accept = document.querySelectorAll(".acceptedReq");
     if(role !== null){
          if( role.value !== "worker"){
               for(let item of accept ){
                    item.style.display = "none";
                    // console.log(" item for worker controling -> " + item);
               }
          }
          if( role.value === "worker"){
               for( let item of removeBtn){
                    item.style.display = "none";
               }
          }
     }
     else{
          for(let item of accept ){
               item.style.display = "none";
               // console.log(" item for worker controling -> " + item);
          }
     }

     if(data[i].status === "cancelled"){
          for( let item of removeBtn){
               item.style.display = "none";
          }
          for(let item of accept ){
               item.style.display = "none";
               // console.log(" item for worker controling -> " + item);
          }
     }
}
