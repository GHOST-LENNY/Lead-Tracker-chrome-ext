const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.querySelector("ul");
let myLeads = [];

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  renderLead();
  inputEl.value = "";
});

function renderLead() {
  let listItems = "<li><a href='" + inputEl.value + "' target='_blank'>" + inputEl.value + "</a></li>";
  ulEl.innerHTML += listItems;
}
// inputBtn.addEventListener("click", saveLead);

// function saveLead() {
// //   let lead = inputEl.value;
//   let listItems = "";
// //   console.log("mylead:" + lead);

// //   myLeads.push(lead);
//   myLeads.push(inputEl.value);
//   inputEl.value = "";
//   console.log("mylead:" + inputEl.value);

//   for (i = 0; i < myLeads.length; i++) {
//     console.log(myLeads[i]);
//     listItems += `<li> ${myLeads[i]} </li>`;

//     // inputEl.value = "";

//     // let li = document.createElement("li");
//     // li.textContent = myLeads[i];
//     // ulEl.append(li);
//   }

//   ulEl.innerHTML = listItems;
// //   lead = "";
// }
   