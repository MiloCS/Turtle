function nameTurtle(ele) {
    if(event.key === 'Enter') {
        modifyPage(ele.value)        
    }
}

function modifyPage(text) {
    let input = document.getElementById("nameinput")
    input.children[0].remove()
    const para = document.createElement("p")
    const name = document.createTextNode(text)
    para.id = "turtlename"
    para.appendChild(name)
    input.appendChild(para)
}

function loadTurtle() {
    const para = document.createElement("img")
    para.src="Turtles/turtle1.jpg"
    para.height = 400
    let booty = document.getElementById("turtle-content")
    booty.appendChild(para)
}

window.onload=loadTurtle