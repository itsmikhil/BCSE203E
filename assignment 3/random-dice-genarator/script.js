const body = document.querySelector("body");
const btn = document.querySelector(".btn");

let generateRandomNumber = () => {
    return Math.floor(Math.random() * 6 + 1);
};

let image = document.querySelector("img");
let randomDiceGenerate = () => {
    image = document.querySelector("img");
  if (!image && image == null) {
    let img = document.createElement("img");
    img.setAttribute("src", `${generateRandomNumber()}.png`);
    body.appendChild(img);
  }else{
    image.setAttribute("src", `${generateRandomNumber()}.png`);
  }
};

btn.addEventListener("click", randomDiceGenerate);
