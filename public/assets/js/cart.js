$(function () {
//NOTES/
/*
-Each item in the sell handlebar may need an id and data attribute
-will need functions to add to items to cart and save to local storage
-addToCart() and saveCart()
-items should still appear in cart if the user reloads the page
-
-array to hold items in cart
*/
//***************************************/
//***METHOD ONE FOR LOCAL STORAGE********/
//************************************* */

//storing items into array;
let cart = [];
//check whether key cart is avalible in localStorage object 
if (localStorage.cart) {
    cart = JSON.parse(localStorage.cart);
    showCart();
}
//need to add the item into the cart;
//where we can display the item_name, quanity, price, and total  
function addToCart() {

    let price = $({ price }).val();
    let itemName = $({ item_name }).val();
    let quanity = $({ quanity }).val();

    for (let i in cart) {
        if (cart[i].Product == name) {
            cart[i].Qty = qty;
            showCart();
            saveCart();
            return;
        }
    }
    let item = { Product: name, Price: price, Quanity: quanity }
    cart.push(item);
    saveCart();
    showCart();
}

//save the items in the cart to local storage. if not found in windows object then nothing happens
function saveCart() {
    if (localStorage) {
        localStorage.cart = JSON.stringify(cart);
    }
}
//show cart object in some form. Allow them to remove item?
function showCart() {
    if (cart.length === 0) {
        $("#cart").css("visibility", "hidden");//hide cart
        return;
    }

    for (let i in cart) {
        //some form or table to show items in cart
    }
}
function removeItem () {
    for (let i in cart ) {
        if (cart [i].item_name === item_name) {
            cart.splice(i, 1);
            break;
        }
    }
    //save items in cart again
    saveCart();
}
//END OF METHOD ONE

//***************************************/
//***METHOD TWO FOR LOCAL STORAGE********/
//************************************* */
//we can append the elements in the handlebars to appear in cart
let shoppingCart = (function () {
    let cart = [];
    //save cart in local storage
    function saveCart() {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
    }
    //load cart from local storage
    function loadCart() {
        cart = JSON.parse(localStorage.getItem("shoppingCart"));
    }
    if (localStorage.getItem("shoppingCart") != null) {
        loadCart();
    }
    let obj = {};
})
    //*********************************************/
    //***ON CLICK LISTENER FOR ADD TO CART*********/
    //*********************************************/

    //on click listener from member_shop/guest_shop
$(".ui inverted purple button").on("click", function (event) {
    event.preventDefault(); //might not need since it's not in a form

    //using data attribute for add to cart button, subject to change
    let id = $(this).data("id"); //item 
    let addCart = $(this).data("add-cart");

    //updating the item to put in cart
    $.ajax("/api/cart/", {
        type: "PUT",

    }).then(function () {
        console.log("added item to cart " + id);
        location.reload();
    })
})
//can either add clear all items from cart or delete one item cart; should follow burger app if so

})


