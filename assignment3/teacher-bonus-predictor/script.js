let count = 0;
let sum = 0;
let passCount = 0;
let failCount = 0;

for (let i = 0; i < 10; i++) {
  let input = parseInt(window.prompt(`Enter marks of ${i + 1}th student`));
  sum += input;
  if (input >= 50) {
    passCount++;
  } else {
    failCount++;
  }
}

let avg = (sum / 10).toFixed(2);

document.writeln(
  `Class avg is ${avg}<br> Pass count:${passCount} Fail Count:${failCount} <br> ${
    passCount >= 5
      ? "Teacher is eligible for bonus"
      : "Teacher is not eligible for bonus"
  }`
);
