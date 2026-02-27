let body=document.querySelector("body");
let btn=document.querySelector("button");
let images=document.querySelectorAll("img");
let freqTable=document.querySelector(".freqTable")
let count=[0,0,0,0,0,0];
let numOfRolls=0;
let generateRandomDice=()=>{
    numOfRolls+=4
    images.forEach((el)=>{
        var num=Math.floor((Math.random()*6)+1)
        el.setAttribute("src",`../assets/${num}.png`)
        count[num-1]++;
    })
    freqTable.innerHTML=`
        <table>
            <tr>
                <th>Dice value</th>
                <th>Count</th>
                <th>Freq</th>
            </tr>
            <tr>
                <td>1</td>
                <td>${count[0]}</td>
                <td>${(count[0]/numOfRolls).toFixed(2)}</td>
            </tr>
            <tr>
                <td>2</td>
                <td>${count[1]}</td>
                <td>${(count[1]/numOfRolls).toFixed(2)}</td>
            </tr>
            <tr>
                <td>3</td>
                <td>${count[2]}</td>
                <td>${(count[2]/numOfRolls).toFixed(2)}</td>
            </tr>
            <tr>
                <td>4</td>
                <td>${count[3]}</td>
                <td>${(count[3]/numOfRolls).toFixed(2)}</td>
            </tr>
            <tr>
                <td>5</td>
                <td>${count[4]}</td>
                <td>${(count[4]/numOfRolls).toFixed(2)}</td>
            </tr>
            <tr>
                <td>6</td>
                <td>${count[5]}</td>
                <td>${(count[5]/numOfRolls).toFixed(2)}</td>
            </tr>
        </table>
    `
}

btn.addEventListener("click",generateRandomDice)