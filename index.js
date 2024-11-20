const inputFieldElement = document.getElementById("input-field")
const addToCartButtonElement = document.getElementById("add-to-cart-button")

addToCartButtonElement.addEventListener("click", function() {
    let inputValue = inputFieldElement.value
    
    console.log(inputValue)
})