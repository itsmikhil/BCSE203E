let nameInput = document.querySelector(".name");
let email = document.querySelector(".email");
let phone = document.querySelector(".phone");
let gender = document.querySelector('.gender');
let country = document.querySelector(".country");
let comment = document.querySelector(".comment");
let form = document.querySelector("form");
let message="";

let validateText = (el) => {
    let trimmedText=el.value.trim();
    if(trimmedText.length==0){
        message+=`${el.classList[0]} cant be empty\n`
    }
}

let validateEmail=(el)=>{
    let trimmedText=el.value.trim();
    if(!trimmedText.includes('@') || !trimmedText.includes('.')){
        message+=`${el.classList[0]} is not valid\n`
    }
}

let validateNumber = (el) => {
    let trimmedText=el.value.trim();
    if(trimmedText.length==0){
        message+=`${el.classList[0]} cant be empty\n`
    }else if(trimmedText.length<=9){
        message+=`${el.classList[0]} should contain 10 digits\n`
    }
}

let validateRadio=(el)=>{
    if(!el.value==("Male") || !el.value==   ("Female")){
        message+=`please select ${el.classList[0]}\n`
    }
}

let startValidation = (e) => {
    e.preventDefault();
    validateText(nameInput);
    validateEmail(email);
    validateNumber(phone);
    validateText(country);
    validateText(comment);
    validateRadio(gender);
    window.alert(message);
    message="";
}

form.addEventListener("submit", (e) => startValidation(e));
