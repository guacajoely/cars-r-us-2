import { createHTML } from "./createHTML.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = createHTML()
}

renderAllHTML()