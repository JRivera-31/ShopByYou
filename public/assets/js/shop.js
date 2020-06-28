let cartItems = [];

$(".purchasebutton").on("click", function (event) {
  const name = $(this).data("name");
  const price = $(this).data("price");
  const img = $(this).data("img");
  const quantity = $(this).data("quantity")
  const id = $(this).data("id")
  // Decrement quantity
  let newQuantity = quantity - 1
  // Assign the new quanttiy to an object
  let updatedQuantity = { quant: newQuantity }
  // Assign all the item data attributes to an object
  let item = { name: name, price: price, image: img }
  // Push the object to an array
  cartItems.push(item);
  console.log(cartItems);
  // Pass the array to local storage
  localStorage.setItem("cart-items", JSON.stringify(cartItems));
  // Send put request to update quantity
  $.ajax({
    type: "put",
    url: "/shop/updateitem/" + id,
    data: updatedQuantity
  })
    .then(function (updatedItem) {
      console.log(console.log(updatedItem));
      window.location.reload();
      return alert("Item added to cart!");
    })
    .catch(function (err) {
      console.log(err);
    });
});
