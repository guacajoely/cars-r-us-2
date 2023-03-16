import { generatePaintHTML } from "./paints.js"

export const createHTML = () => {
    return `
        <h1>Cars R Us</h1>
        <article class="choices">
            <section class="choices__colors options">
                <h2>Colors</h2>
                ${generatePaintHTML()}
            </section>
            <section class="choices__interiors options">
                <h2>Interiors</h2>
              
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
              
            </section>
            <section class="choices__technologies options">
            <h2>Technologies</h2>
          
        </section>
        </article>
        <article class="types">
           
        </article>
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>
        <article class="customOrders">
            <h2>Custom Car Orders</h2>
          
        </article>
    `
}