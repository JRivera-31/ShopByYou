let cartItems = [];

$(".purchasebutton").on("click", function (event) {
  const name = $(this).data("name");
  const price = $(this).data("price");
  const img = $(this).data("img");

  let item = { name: name, price: price, image: img };
  cartItems.push(item);
  console.log(cartItems);

  localStorage.setItem("cart-items", JSON.stringify(cartItems));
  let id = $(this).data("id");

  $.ajax({
    type: "delete",
    url: "/shop/deleteitem/" + id,
  })
    .then(function (deletedItem) {
      console.log(console.log(deletedItem));
      window.location.reload();
      return alert("Item added to cart!");
    })
    .catch(function (err) {
      console.log(err);
    });
});
