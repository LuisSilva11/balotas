let btn = document.getElementById("btn")

let balota1 = Math.floor(Math.random() * 15)
let balota2 = Math.floor(Math.random() * 15)
let balota3 = Math.floor(Math.random() * 15)
let balota4 = Math.floor(Math.random() * 15)
let balota5 = Math.floor(Math.random() * 15)
let balota6 = Math.floor(Math.random() * 10)

function baloto() {
    document.querySelector(".bola1").innerHTML = `${balota1}`
    document.querySelector(".bola2").innerHTML = `${balota2}`
    document.querySelector(".bola3").innerHTML = `${balota3}`
    document.querySelector(".bola4").innerHTML = `${balota4}`
    document.querySelector(".bola5").innerHTML = `${balota5}`
    document.querySelector(".bola6").innerHTML = `${balota6}`

setTimeout(() => {
    alert("la buena")
    location.reload()
}, 2000);
}

btn.addEventListener('click', baloto)