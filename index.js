const btn = document.querySelector("#button");
const ctn = document.querySelector(".container");
const box = document.querySelector(".box");

const result = [];

const generateNumber = () => {
  if (result.length === 5) {
    return;
  }

  const lotteryNumber = Math.floor(Math.random() * 45 + 1);

  for (let i = 0; i < result.length; i++) {
    if (lotteryNumber === result[i]) {
      return generateNumber();
    }
  }

  const div = document.createElement("div");
  ctn.appendChild(div);
  div.classList.add("number");
  div.textContent = lotteryNumber;
  result.push(lotteryNumber);
};

btn.addEventListener("click", generateNumber);
