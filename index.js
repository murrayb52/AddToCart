const inputFieldElement = document.getElementById(input-field)
const addToCartButtonElement = document.getElementById(add-to-cart-button)

addToCartButtonElement.addEventListener("click", function() {
   let inputFieldValue = inputFieldElement.value
   console.log(inputFieldValue)
})