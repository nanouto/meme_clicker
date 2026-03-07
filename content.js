let cookies = 0
let clickPower = 1
let auto = 0
let maxImages = 9


const score = document.getElementById("score")
const cookie = document.getElementById("cookie")
const autoDisplay = document.getElementById("autoCount")
const powerDisplay = document.getElementById("powerCount")
const sound = document.getElementById("clickSound")

cookie.onclick = function(){
    cookies += clickPower
    update()
    falling.onclick = function(){
    cookies += clickPower
    update()

    fallingCookie()
}
}

function upgradeClick(){
    if(cookies >= 20){
        cookies -= 20
        clickPower += 1

        let zone = document.getElementById("cookieZone")

        if(zone.children.length < 9){
            let newCookie = document.createElement("img")
            newCookie.src = "thujunaa.jpeg"
            newCookie.width = 10

            zone.appendChild(newCookie)
        }

        update()
    }
}
function upgradeClick2(){
    if(cookies >= 1000){
        cookies -= 1000
        clickPower += 2

        let zone = document.getElementById("cookieZone")

        if(zone.children.length < 9){
            let newCookie = document.createElement("img")
            newCookie.src = "thujunaa.jpeg"
            newCookie.width = 10

            zone.appendChild(newCookie)
        }

        update()
    }
}

function buyAuto(){
    if(cookies >= 50){
        cookies -= 50
        auto += 1
        update()
    }
}
function buyAuto2(){
    if(cookies >= 1500){
        cookies -= 1500
        auto += 10
        faaaaaaa.onclick = function(){
    cookies += clickPower
    update()

    sound.play()
}
        update()
    }
}

function update(){
    score.textContent = cookies
    autoDisplay.textContent = auto
    powerDisplay.textContent = clickPower
}

setInterval(function(){
    cookies += auto
    update()
},1000)

function fallingCookie(){

    let cookie = document.createElement("img")
    cookie.src = "gotho.png"

    cookie.classList.add("fallingCookie")

    cookie.style.left = Math.random()*window.innerWidth + "px"

    document.body.appendChild(cookie)

    setTimeout(() => {
        cookie.remove()
    },2000)

}
