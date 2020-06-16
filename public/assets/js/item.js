const { json } = require("sequelize");

//inputting item up for sell
$(function () {
    //local storage for cart
    let cart = [];
    //check whether key cart is avalible in localStorage object 
    if(localStorage.cart) {
        cart = JSON.parse(localStorage.cart);
        showCart();
    }
    //need to add the item into the cart;
    //where we can display the item_name, quanity, price, and total  
    function addToCart() {
        
        let price = $({price}).val();
        let itemName = $({item_name}).val();
        let quanity = $({quanity}).val();

        for(let i in cart) {
            if(cart[i].Product == name) {
                cart[i].Qty = qty;
                showCart();
                saveCart();
                return;
            }
        }
        let item = {Product: name, Price: price, Quanity: quanity}
        cart.push(item);
        saveCart();
        showCart();

    }


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

