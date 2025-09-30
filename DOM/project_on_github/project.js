const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
     bodyEl.style.border="2px solid white";
  } else {
    bodyEl.style.background = "white";
   
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();

});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}