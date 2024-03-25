

const div = document.createElement("div")

document.body.appendChild(div)

div.classList.add("div")

function backanim() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    const color = `rgb(${r}, ${g}, ${b})`
    console.log(color)
    document.body.style.background = color
    div.textContent = color
}



setInterval(() => {
    backanim();
}, 2000)



