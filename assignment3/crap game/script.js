let playBtn = document.querySelector("button.play");
let rollBtn = document.querySelector("button.roll-dice");
let targetDiv = document.querySelector(".target");
let rollDiv = document.querySelector(".roll");
let resultText = document.querySelector(".result");
let titleText = document.querySelector(".title");

let targetSum = 0;
let currSum = 0;

let genrateRandomNumber = () => {
  return Math.floor(Math.random() * 6 + 1);
};

let genrateTargetSum = () => {
  targetSum = 0;
  if (targetDiv.children.length == 0) {
    for (let i = 0; i < 2; i++) {
      let image = document.createElement("img");
      let genratedNumber = genrateRandomNumber();
      image.setAttribute("src", `../assets/${genratedNumber}.png`);
      targetSum += genratedNumber;
      targetDiv.appendChild(image);
    }
  } else {
    for (let i = 0; i < 2; i++) {
      let genratedNumber = genrateRandomNumber();
      targetDiv.children[i].setAttribute(
        "src",
        `../assets/${genratedNumber}.png`
      );
      targetSum += genratedNumber;
    }
  }
  rollBtn.disabled=false;
  titleText.textContent=`Target Sum is : ${targetSum}`
};

let handleRollDice = () => {
  currSum = 0;
  if (rollDiv.children.length == 0) {
    for (let i = 0; i < 2; i++) {
      let image = document.createElement("img");
      let genratedNumber = genrateRandomNumber();
      image.setAttribute("src", `../assets/${genratedNumber}.png`);
      currSum += genratedNumber;
      rollDiv.appendChild(image);
    }
  } else {
    for (let i = 0; i < 2; i++) {
      let genratedNumber = genrateRandomNumber();
      rollDiv.children[i].setAttribute(
        "src",
        `../assets/${genratedNumber}.png`
      );
      currSum += genratedNumber;
    }
  }
};

let handleResult = () => {
  if (targetSum == currSum) {
    resultText.innerHTML = "Congrats you won!";
  } else {
    resultText.innerHTML = "Better luck next time! Roll again!";
  }
};

playBtn.addEventListener("click",()=>{
    genrateTargetSum();
    resultText.innerHTML="Roll the dice"
} );
rollBtn.disabled=true;
rollBtn.addEventListener("click", () => {
  if (targetSum != 0) {
    handleRollDice();
    handleResult();
  }
});
