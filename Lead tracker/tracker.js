const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteAll = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn");
const copyBtn = document.getElementById("copy-btn");
const ulEl = document.querySelector("ul");

// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// let myLeads = leadsFromLocalStorage || [];
// render(myLeads);

chrome.storage.local.get(["myLeads"], (result) => {
  myLeads = result.myLeads || [];
  render(myLeads);
});

tabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentUrl = tabs[0].url;
    myLeads.push(currentUrl);
      chrome.storage.local.set({ myLeads: myLeads });
    // localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

inputBtn.addEventListener("click", function () {
  if (!inputEl.value?.trim()) return;

  myLeads.push(inputEl.value);
  inputEl.value = "";

  chrome.storage.local.set({ myLeads: myLeads });
  // localStorage.setItem("myLeads", JSON.stringify(myLeads));

  render(myLeads);
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li><a href ="${leads[i]}" target= "_blank">${leads[i]}</a></li>`;
  }

  ulEl.innerHTML = listItems;
}

function deleteBtn() {
  // localStorage.clear();
  chrome.storage.local.remove("myLeads");
  myLeads = [];
  ulEl.innerHTML = "";
}

deleteAll.addEventListener("dblclick", deleteBtn);
