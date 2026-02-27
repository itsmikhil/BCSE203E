let body=document.querySelector("body");
let btn=document.querySelector("button");
let images=document.querySelectorAll("img");


let generateRandomDice=()=>{
    images.forEach((el)=>{
        var num=Math.floor((Math.random()*6)+1)
        el.setAttribute("src",`../assets/${num}.png`)
    })
}

btn.addEventListener("click",generateRandomDice)