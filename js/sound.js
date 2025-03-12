const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"]
sounds.forEach( (sound)=>{
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerHTML = sound;
    btn.addEventListener("click", ()=> {
        stopSounds();
        document.getElementById(sound).play();
    })

    const buttons = document.getElementById("buttons").appendChild(btn);

})
function stopSounds(){
    sounds.forEach(sound =>{
        document.getElementById(sound).pause();
        document.getElementById(sound).currentTime = 0;
    })
}
