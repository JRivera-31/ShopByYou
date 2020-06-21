// Grab everything we need
const cartArea = $("#displayCart")
const totalPrice = $("#totalPrice")
const clearCart = $("#clearCart")

// Get items from local storage
// let cartItem = JSON.parse(localStorage.getItem("cart-items"))

// console.log(cartItem)

// Get array of items from local storage
var cartItems = JSON.parse(localStorage.getItem("cart-items")) || [];

for (let i = 0; i < cartItems.length; i++) {
  // Create html
  let displayImg = `<img src=${cartItems[i].image} class=ui right spaced image />`

  let displayItem = `<p class='header'><strong>Item Name: </strong>${cartItems[i].name}</p>
  <div class="meta">
  <span class="price"><strong>Price: </strong>${cartItems[i].price}</span>
  </div>`
    
  let price = `<p>$${cartItems[i].price}</p>`

  // Append elements
  cartArea.append(displayItem)
  cartArea.append(displayImg)
  totalPrice.append(price)
}
// To clear cart
clearCart.on("click", function(event) {
  localStorage.clear()
  window.location.reload()
})