let count = 0;
let sum = 0;
while (count < 5) {
  sum = sum + parseInt(window.prompt("Enter Marks"));
  console.log(sum);
  count++;
}
document.writeln(`Class avg is ${sum/count}`);
