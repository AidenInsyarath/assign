const panel = document.querySelectorAll('.panel')

panel.addEventListener("mouseover", ()=>{
    panel.style.color = "black"
    panel.style.backgroundColor= "blue"
})


panel.addEventListener("mouseout", ()=>{
    panel.style.color = "white"
    panel.style.backgroundColor= "red"
})
