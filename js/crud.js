"use strict";

const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () =>
  document.getElementById("modal").classList.remove("active");

document.getElementById("registerClient").addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);

let list1 = [];
let list2 = [];
let list3 = [];
let list4 = [];
let n = 1;
let x = 0;

function addRow() {
  let AddRow = document.getElementById("records");
  let NewRow = AddRow.insertRow(n);

  list1[x] = document.getElementById("celName").Value;
  list2[x] = document.getElementById("celEmail").Value;
  list3[x] = document.getElementById("celPhone").Value;
  list4[x] = document.getElementById("celCity").Value;

  let cel1 = NewRow.insertCell(0);
  let cel2 = NewRow.insertCell(1);
  let cel3 = NewRow.insertCell(2);
  let cel4 = NewRow.insertCell(3);

  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];
  cel4.innerHTML = list4[x];

  n++;
  x++;
}
