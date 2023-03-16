import { getPaints } from "./database.js";
const arrayOfPaints = getPaints()

export const generatePaintHTML = () => {
    let html = `<select id="resource">
    <option value="0">Select a paint...</option>`

    for (const paint of arrayOfPaints) {
        html +=  `<option value="${paint.id}">${paint.name}</option>`
    }

    html += `</select>`
    return html
}