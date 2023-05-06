const btn = document.querySelector("#button");
const ctn = document.querySelector(".container");
const box = document.querySelector(".box");

const generateNumber = () => {
  const div = document.createElement("div");
  ctn.appendChild(div);
  div.classList.add("number");
  div.textContent = Math.floor(Math.random() * 45 + 1);
};

btn.addEventListener("click", generateNumber);
