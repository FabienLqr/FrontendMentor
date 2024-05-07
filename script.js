const send = document.querySelector(".send");
const sign = document.getElementById("sign");
const succes = document.getElementById("succes");
const dismiss = document.querySelector(".desmiss");

send.addEventListener("click", () => {
  console.log("ca a ete click");
  sign.classList.remove(".sign");
  sign.classList.add(".none");
  succes.classList.remove(".none");
  succes.classList.add(".succes");
});

dismiss.addEventListener("click", () => {
  console.log("ca a aussi ete pris");
  sign.classList.toggle(".sign");
  succes.classList.toggle(".none");
});
