const mainPage = document.getElementById("mainPage");
const addingPage = document.getElementById("addingPage");
const showLiInfo = document.getElementById("showLiInfo");

const addButton = document.getElementById("addButton");
const saveButton = document.getElementById("saveButton");
var list = document.getElementById("list");

const optionBez = document.getElementById("bez");
const optionCas = document.getElementById("cas");
const optionMapa = document.getElementById("mapa");

// const information = document.getElementsByClassName("information");
// const bezShow = document.getElementById("bezShow");
// const casShow = document.getElementById("casShow");
// const mapaShow = document.getElementById("mapaShow");

function initialize() {
  document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady() {
  // alert("its working");
  addingPage.style.display = "none";
  showLiInfo.style.display = "none";
  // addButton.addEventListener("click", adding);
}
function adding() {
  mainPage.style.display = "none";
  addingPage.style.display = "block";

  bezShow.style.display = "none";
  casShow.style.display = "none";
  mapaShow.style.display = "none";

  // optionBez.onclick = changeColorBez;
  // optionMapa.onclick = changeColorMapa;
  // optionCas.onclick = changeColorCas;
  // saveButton.addEventListener("click", addingToTheList);
}
function addingToTheList() {
  addingPage.style.display = "none";
  mainPage.style.display = "block";

  var value = document.getElementById("input1").value;
  if (value) {
    var item = document.createElement("li");
    var btnDelete = document.createElement("button");
    // btnDelete.style.display = "none";
    btnDelete.innerHTML = "delete";
    item.innerText = value;
    list.appendChild(item);
    item.appendChild(btnDelete);
    document.getElementById("input1").value = "";
    btnDelete.addEventListener("click", Delete);
    // item.addEventListener("click", showLi);
    // btnDelete.addEventListener("click", remove);
  }
}
function changeColorBez() {
  optionBez.style.backgroundColor = "#6a0a96";
  optionMapa.style.backgroundColor = "#e2e2e2";
  optionCas.style.backgroundColor = "#e2e2e2";
  bezShow.style.display = "block";
  casShow.style.display = "none";
  mapaShow.style.display = "none";
}
function changeColorCas() {
  optionBez.style.backgroundColor = "#e2e2e2";
  optionMapa.style.backgroundColor = "#e2e2e2";
  optionCas.style.backgroundColor = "#6a0a96";
  bezShow.style.display = "none";
  casShow.style.display = "block";
  mapaShow.style.display = "none";
}
function changeColorMapa() {
  optionBez.style.backgroundColor = "#e2e2e2";
  optionMapa.style.backgroundColor = "#6a0a96";
  optionCas.style.backgroundColor = "#e2e2e2";
  bezShow.style.display = "none";
  casShow.style.display = "none";
  mapaShow.style.display = "block";
}
function showLi(event) {
  showLiInfo.style.display = "block";
  addingPage.style.display = "none";
  mainPage.style.display = "none";
  console.log(event);
  var text = event.target.innerText;
  var textShow = (document.getElementById("nameOfLi").innerHTML = text);

  // event.target.
}
function Delete(event) {
  console.log(event);
  let list = this.parentNode.parentNode;
  let item = this.parentNode;
  list.removeChild(item);
}
initialize();
