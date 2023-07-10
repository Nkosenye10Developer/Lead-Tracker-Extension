// chrome://extensions/

let myLeads= [];

// myLeads = JSON.parse(myLeads);

// myLeads.push("www.epiclead.com")
// myLeads = JSON.stringify(myLeads);
// console.log(typeof myLeads);
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl =document.getElementById("ul-el");
const deletebtn = document.getElementById("delete-btn")
const tabBtn= document.getElementById("tab-btn");
// localStorage.clear();
const leadsFromLocalStroage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStroage);
// localStorage.setItem("myLeads","www.example.com")
// console.log(localStorage.getItem("myLeads"));
// localStorage.clear();

if(leadsFromLocalStroage){
  myLeads = leadsFromLocalStroage;
  render(myLeads);
}


tabBtn.addEventListener("click",function(){
//   chrome.tabs.query({ active: true,currentWindow: true}, function(tabs) {
//  
    
// });

chrome.tabs.query({active: true,currentWindow:true}, function(tabs) {
  
  
      console.log(tabs[0].url);
      myLeads.push(tabs[0].url);
      localStorage.setItem("myLeads",JSON.stringify(myLeads));
      render(myLeads);
})

 
})

function render(Leads) {
  let listItems = "";
  for(let i = 0; i < Leads.length; i++){
      // ulEl.innerHTML += "<li>" +myLeads[i] + "</li>";
  
  // const li= document.createElement("li");
  // li.textContent = myLeads[i];
  // ulEl.append(li)
  
  listItems +=
  `<li>
      <a target='_blank' href=${Leads[i]}'>
      ${Leads[i]}
    </a>
  </li>
  `;
  
  }
  ulEl.innerHTML = listItems;
  }

deletebtn.addEventListener("dblclick",function () {
 localStorage.clear();
 myLeads = [];
 render(myLeads);

})

inputBtn.addEventListener("click", function(){

myLeads.push(inputEl.value);
inputEl.value = "";
    
localStorage.setItem("myLeads",JSON.stringify(myLeads));
render(myLeads);

console.log(localStorage.getItem("myLeads"));
})



















