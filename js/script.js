let btn = document.getElementById("btn")



function baloto() {
    let num01 = document.querySelector(".num1")
    let num02 = document.querySelector(".num2")
    let num03 = document.querySelector(".num3")
    let num04 = document.querySelector(".num4")
    let num05 = document.querySelector(".num5")
    let num06 = document.querySelector(".num6")

    let num1 = parseInt(num01.value)
    let num2 = num02.value
    let num3 = num03.value
    let num4 = num04.value
    let num5 = num05.value
    let num6 = num06.value

    let balota1 = Math.floor(Math.random() * 15)
    let balota2 = Math.floor(Math.random() * 15)
    let balota3 = Math.floor(Math.random() * 15)
    let balota4 = Math.floor(Math.random() * 15)
    let balota5 = Math.floor(Math.random() * 15)
    let balota6 = Math.floor(Math.random() * 10)
    
    document.querySelector(".bola1").innerHTML = `${balota1}`
    document.querySelector(".bola2").innerHTML = `${balota2}`
    document.querySelector(".bola3").innerHTML = `${balota3}`
    document.querySelector(".bola4").innerHTML = `${balota4}`
    document.querySelector(".bola5").innerHTML = `${balota5}`
    document.querySelector(".bola6").innerHTML = `${balota6}`

    setTimeout(() => {
        if (
            balota1 == num1 ||
            balota2 == num2 ||
            balota3 == num3 ||
            balota4 == num4 ||
            balota5 == num5 ||
            balota6 == num6
        ) {
            alert("FELICIDADES GANASTE :))")
        }
        else {
            alert("NADA QUE HACER :((")
        }
    }, 1000);

    setTimeout(() => {
        location.reload()
    }, 2000);
}


btn.addEventListener('click', baloto)