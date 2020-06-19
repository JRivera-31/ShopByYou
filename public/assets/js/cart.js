// Grab everything we need
const cartArea = $("#displayCart")
const totalPrice = $("#totalPrice")
const clearCart = $("#clearCart")

// Get items from local storage
let cartItem = JSON.parse(localStorage.getItem("cart-items"))

console.log(cartItem)

// Create html
let displayImg = `<img src=${cartItem.image} class=ui right spaced image />`

let displayItem = `<p class='header'><strong>Item Name: </strong>${cartItem.name}</p>
<div class="meta">
 <span class="price"><strong>Price: </strong>${cartItem.price}</span>
</div>`
  
let price = `<p>$${cartItem.price}</p>`

// Append elements
cartArea.append(displayItem)
cartArea.append(displayImg)
totalPrice.append(price)

// To clear cart
clearCart.on("click", function(event) {
  localStorage.clear()
  window.location.reload()
})