const addTodo = () => {
    const title = document.getElementById("title").value
    const description = document.getElementById("description").value

    const outerDiv = document.createElement("div")
    outerDiv.classList.add("todo-item")

    const titleEl = document.createElement("p")
    titleEl.innerText = `Title: ${title}`

    const descEl = document.createElement("p")
    descEl.innerText = `Description: ${description}`

    const doneBtn = document.createElement("button")
    doneBtn.innerText = "Mark as Done"

    doneBtn.addEventListener("click", () => {
        doneBtn.innerText = "Done"
    })

    outerDiv.appendChild(titleEl)
    outerDiv.appendChild(descEl)
    outerDiv.appendChild(doneBtn)

    document.getElementById("finalTodo").appendChild(outerDiv)
}