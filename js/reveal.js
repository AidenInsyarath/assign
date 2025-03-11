const element3 = document.getElementById("element3");
const panels = document.querySelectorAll('.panel')

let positionY = 0;
let positionX = 0;
let movement = 16;

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


