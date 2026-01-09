let sum = 0;
let count = 0;
let input = parseInt(window.prompt("keep entering marks and -1 to quit"));
while(input != -1) {
  sum += input;
  count++;
  input = parseInt(window.prompt("keep entering marks and -1 to quit"));
}

document.writeln(`The class avg is ${(sum / count).toFixed(2)}`);
