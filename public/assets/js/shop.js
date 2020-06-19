$(".purchasebutton").on("click", function (event) {
    const name = $(this).data("name")
    const price = $(this).data("price")
    const img = $(this).data("img")
    console.log(price)

    let cartItem = {name: name, price: price, image: img}

    localStorage.setItem("cart-items", JSON.stringify(cartItem))
    let id = $(this).data("id")

    $.ajax({
            type: "delete",
            url: "/api/deleteitem/" + id
        }).then(function(deletedItem) {
            console.log(console.log(deletedItem))
            window.location.reload()
            return alert("Item added to cart!")
        }).catch(function(err) {
          console.log(err)
        }) 
})

// var cartItems = JSON.parse(localStorage.getItem("cart-items")) || [];

// $(".purchasebutton").on("click", function (event) {
//     const name = $(this).data("name")
//     const price = $(this).data("price")
//     const img = $(this).data("img")
//     console.log(price)

//     let item = {name: name, price: price, image: img}
//     cartItems.push(item);

//     localStorage.setItem("cart-items", JSON.stringify(cartItems))
//     let id = $(this).data("id")

//     $.ajax({
//             type: "delete",
//             url: "/api/deleteitem/" + id
//         }).then(function(deletedItem) {
//             console.log(console.log(deletedItem))
//             window.location.reload()
//             return alert("Item added to cart!")
//         }).catch(function(err) {
//           console.log(err)
//         }) 
// })