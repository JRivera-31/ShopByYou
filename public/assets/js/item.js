const { json } = require("sequelize");

//inputting item up for sell
$(function() {
    let item = {
        //grabbing name values
        item_name: $('.item').val().trim(),
        price: $('.price').val().trim(),
        category: $('.category').val().trim(),
        quantity: $('.quantity').val().trim(),
        description: $('.description').val().trim()
    };
    //adding item to sell in sell.handlbars
    $("#itemForm").on("submit", event => {
        event.preventDefault();
        $.ajax('/api/item', {
            type: 'POST',
            data: item
        }).then(function() {
            console.log('Added item to database');
            location.reload();
        });
    });
    //add item to cart
    $(".ui inverted purple button").on("click", event =>{
        localStorage.set("userCart", JSON.stringify(item));
        let userItems = localStorage.getItem("userCart");


    })
    //


    //remove from favorites
    $(".ui inverted red button").on("click", event => {
        let id = $(this).data("id");
        $.ajax("/api/item/" + id, {
            type: "DELETE"
        }).then(() => {
            console.log("Deleted item from favorites: " + id);
            location.reload();
        })
    });
    //remove from cart
})
   
