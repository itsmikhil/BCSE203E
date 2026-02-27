let textBox=document.querySelector(".time")

let displayTime=()=>{
    let now=new Date();
    let hrs=now.getHours();
    let mins=now.getMinutes();
    textBox.innerHTML= `Current time is ${hrs}:${mins}`;
    console.log("refresh");
}
displayTime();
setInterval(displayTime, 60000);