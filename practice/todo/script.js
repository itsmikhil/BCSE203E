let taskInput=document.querySelector(".task")
let btn=document.querySelector("button")
let main=document.querySelector("main")

let allTasks=[]

let addTask=()=>{
    if( taskInput.value && taskInput.value!=""){
        let task=document.createElement("div")
        task.classList.add("task")
        let h1=document.createElement("h1")
        h1.textContent=taskInput.value
        let button=document.createElement("button")
        button.innerText="delete"
        task.appendChild(h1)
        task.appendChild(button)
        allTasks.push(task)
        button.addEventListener("click",()=>{deleteTask(task)})
        h1.addEventListener("click",()=>{strike(h1)})
    }
}

let alltask=()=>{
    // dont forget iss se aisa lagta hai ki delete kaam nhi kar raha 
    main.innerHTML=""
    allTasks.forEach(el=>{
        main.appendChild(el)
    })
}

let strike=(el)=>{
    el.classList.toggle("strike")
}

let deleteTask=(element)=>{
    allTasks=allTasks.filter((el)=>el!==element)
    alltask()
}

btn.addEventListener("click",()=>{addTask();alltask()})