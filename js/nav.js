const nav = document.querySelector('.nav')

window.addEventListener('scroll', () => {
    if (windo.scrollY > 160){
        nav.classList.add('active)
    }
    else {
        nav.classList.remove('active')
    }
})
