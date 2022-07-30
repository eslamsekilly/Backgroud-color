const color1 = document.querySelector("input")
const color2 = document.getElementsByClassName("2nd")[0]
const body = document.querySelector("body")
const last = document.querySelector(".linear-gradient")

function colorChange() {
    body.style.cssText = `background-image: linear-gradient(to right, ${color1.value}, ${color2.value});`
    last.textContent = body.style.backgroundImage
}

color1.addEventListener("input",colorChange)
color2.addEventListener("input",colorChange)