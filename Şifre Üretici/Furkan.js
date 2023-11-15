const pssBtn = document.querySelector(".pssBtn");
const input = document.querySelector("input");
const fasolid = document.querySelector(".fa-solid");
const uyari = document.querySelector(".alertContainer");

pssBtn.addEventListener("click", createPassword);
fasolid.addEventListener("click", copyPassword);
function createPassword() {
  const passwordLength = 14;
  const characters =
    "0123456789abcdefghijklmnoprstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * characters.length);
    password += characters[randomNum];
  }
  input.value = password;
  uyari.textContent=password + "Kopyalandı.!"
}

function copyPassword() {
  if (input.value) {
    input.select();
    navigator.clipboard.writeText(input.value);
    uyari.classList.remove("active");
    setTimeout(() => {
      uyari.classList.add("active");
    }, 2000);
  }
}
