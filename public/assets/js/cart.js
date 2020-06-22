// Grab everything we need
const cartArea = $("#displayCart")
const displayTotalPrice = $("#totalPrice")
const clearCart = $("#clearCart")

// Get array of items from local storage
var cartItems = JSON.parse(localStorage.getItem("cart-items")) || [];

let totalPrice = 0

for (let i = 0; i < cartItems.length; i++) {
  // Create html
  let displayItem = `<p class='header'><strong>Item Name: </strong>${cartItems[i].name}</p>
  <div class="meta">
  <img src=${cartItems[i].image} class=ui right spaced image />
  <br>
  <span class="price"><strong>Price: </strong>$${cartItems[i].price}</span>
  </div>
  <hr>`

  // Calculate total price
  totalPrice += cartItems[i].price

  // Append elements
  cartArea.append(displayItem)
}

displayTotalPrice.append("$" + totalPrice)

// To clear cart
clearCart.on("click", function(event) {
  localStorage.clear()
  window.location.reload()
})