let cartItems = [];

$(".purchasebutton").on("click", function (event) {
  const name = $(this).data("name");
  const price = $(this).data("price");
  const img = $(this).data("img");
  const quantity = $(this).data("quantity")
  const id = $(this).data("id")
  
  console.log(quantity)
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
    data: { quantity: quantity }
  })
    .then(function (updatedItem) {
      console.log(updatedItem);
      window.location.reload();
      return alert("Item added to cart!");
    })
    .catch(function (err) {
      console.log(err);
    });
});

$(".deletebutton").on("click", function (event) {
  const id = $(this).data("id")

  $.ajax({
    type: "delete",
    url: "/shop/item/" + id 
  }).then(function (deletedItem) {
    window.location.reload()
  })
})
