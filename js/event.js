const element1 = document.getElementById("element1");
const element2 = document.getElementById("element2");
const element3 = document.getElementById("element3");
const element4 = document.getElementById("element4");
const element5 = document.getElementById("element5");


let positionY = 0;
let positionX = 0;
let movement = 16;


element1.addEventListener("click", ()=>{
    element1.innerHTML = "<h6><ul> <li>Hi</li> <li>Hello</li> </ul></h6> <p>Click Twice!</p>"
})


element1.addEventListener("dblclick", ()=>{
    element1.innerHTML = "<h6><ul> <li>Goodbye</li> <li>Bye</li> </ul></h6> <p>Click Once!</p>"
})


element2.addEventListener("mouseover", ()=>{
    element2.style.color = "black"
    element2.style.backgroundColor= "blue"
})


element2.addEventListener("mouseout", ()=>{
    element2.style.color = "white"
    element2.style.backgroundColor= "red"
})


document.addEventListener("keyup", (event)=>{
    console.log(event.key);
    if(event.key == "ArrowUp"){
        positionY -= movement;
    }
    if(event.key == "ArrowDown"){
        positionY += movement;
    }
    if(event.key == "ArrowRight"){
        positionX -= movement;
    }
    if(event.key == "ArrowLeft"){
        positionX += movement;
    }
    element3.style.right = `${positionX}px`;
    element3.style.top = `${positionY}px`;
})


element4.addEventListener("click", ()=>{
    element4.style.width = "10px";
    element4.style.height = "10px";
    element4.innerHTML = "";
    element4.style.opacity = "0.3";
})




document.addEventListener("keyup", (event)=>{
    if(event.key == "j"){
    element4.style.width = "300px";
    element4.style.height = "50px";
    element4.innerHTML = "<h4>Click me to make me small <br> Press &quotj&quot to bring me back</h4>";
    element4.style.opacity = "1";
    }
})


const list = ["running", "paused"];
let index = 0
element5.addEventListener("click", ()=>{
    element5.style.animationPlayState = list[index];
    index = (index + 1)%2
})
