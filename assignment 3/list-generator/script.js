let body = document.querySelector("body");
let type = 0;

switch (parseInt(window.prompt("Enter List type:"))) {
  case 0:
    type = 0;
    break;
  case 1:
    type = 1;
    break;
  case 2:
    type = 2;
    break;
  case 3:
    type = 3;
    break;
}

let list = document.createElement("ol");
if (type == 0) {
  list.style.listStyleType = "lower-alpha";
} else if (type == 1) {
  list.style.listStyleType = "upper-alpha";
} else if (type == 2) {
  list.style.listStyleType = "upper-roman";
} else if (type == 3) {
  list.style.listStyleType = "lower-roman";
}

for (let i = 0; i < 3; i++) {
  let subItem = document.createElement("li");
  subItem.innerText = `subItem ${i + 1}`;
  list.appendChild(subItem);
}
body.appendChild(list);
