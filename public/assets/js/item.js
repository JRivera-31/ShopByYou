const { json } = require("sequelize");

//inputting item up for sell
$(function () {
    //grabbing name values
    // const itemName = $('.item').val().trim();
    // const price = $('.price').val().trim();
    // const category = $('.category').val();
    // const quantity = $('.quantity').val().trim();
    // const description = $('.description').val().trim();
    // const image = $('#userImg');
    // const formSubmit = $('#sellItem');

    // formSubmit.on("submit", function(event) {
    //     event.preventDefault();
    //     let userItem = {
    //         item_name: itemName,
    //         category: category,
    //         quantity: quantity,
    //         image: image,
    //         description: description,
    //         price: price,
    //     }
    //     if(typeof price != "number") {
    //         return alert("Price must be a number!");
    //     }
    //     createItem(userItem);
    // });

    // function createItem (item) {
    //     $.post("/api/sellitem", {
    //         item_name: item.item_name,
    //         category: item.category,
    //         quantity: item.quantity,
    //         image: item.image,
    //         description: item.description,
    //         price: item.price,
    //     }).then(function (data) {
    //         console.log(data);
    //         location.replace("/member-shop")
    //     })
    // }


    // //add item to cart
    // $(".ui inverted purple button").on("click", function(event) {

    //     // localStorage.set("userCart", JSON.stringify(item));
    //     // let userItems = localStorage.getItem("userCart");


    // });
    // //


    // //remove from favorites
    // $(".ui inverted red button").on("click", function(event) {
    //     let id = $(this).data("id");
    //     $.ajax("/api/item/" + id, {
    //         type: "DELETE"
    //     }).then(function() {
    //         console.log("Deleted item from favorites: " + id);
    //         location.reload();
    //     })
    // });
    //remove from cart
})

