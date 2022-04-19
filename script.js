const popup = document.querySelector(".popup");
const submitBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".popup button");

submitBtn.addEventListener("click", openPopup);

closeBtn.addEventListener("click", closePopup);

function openPopup() {
  popup.classList.add("open");
}

function closePopup() {
  popup.classList.remove("open");
}
