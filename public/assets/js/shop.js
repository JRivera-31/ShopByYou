let cartItems = [];

$(".purchasebutton").on("click", function (event) {
  const name = $(this).data("name");
  const price = $(this).data("price");
  const img = $(this).data("img");
  const quantity = $(this).data("quantity")

  let newQuantity = quantity - 1

  let item = { name: name, price: price, image: img };
  cartItems.push(item);
  console.log(cartItems);

  localStorage.setItem("cart-items", JSON.stringify(cartItems));
  let id = $(this).data("id");

  $.ajax({
    type: "put",
    url: "/shop/updateitem/" + id,
    data: newQuantity
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
