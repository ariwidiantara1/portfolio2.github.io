const scriptURL = "https://script.google.com/macros/s/AKfycbz-T75vbmZIAOjTbYC17421LpdmTuVW6YH5VQZbBvI72dTho_bk8tfyLWrTeUdgZMWa1Q/exec";
const form = document.forms["submit-to-google-sheet"];
const btnSend = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");
const btnClose = document.querySelector(".btn-close");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   Ketika click
  //   Hilangkan send, Munculkan loading
  btnSend.classList.toggle("hidden");
  btnLoading.classList.toggle("hidden");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnSend.classList.toggle("hidden");
      btnLoading.classList.toggle("hidden");
      myAlert.classList.remove("hidden");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

btnClose.addEventListener("click", function () {
  myAlert.classList.add("hidden");
});
