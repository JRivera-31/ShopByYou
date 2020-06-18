
//inputting item up for sell
$(function () {
    console.log('attached')
    // grabbing name values
    const image = $('#userImg');
    const formSubmit = $('#sellItem');
    
    formSubmit.submit(function (event) {
        event.preventDefault();
        const itemName = $('.itemName').val().trim();
        const price = $('.price').val().trim();
        const category = $('#categories').val();
        const quantity = $('.quantity').val().trim();
        const description = $('.description').val().trim();
        const file = $("#userImg")[0].files[0]
        console.log(file)
       const formData = new FormData();
        formData.append('file',$("#userImg")[0].files[0])
        console.log('here')

        let userItem = {
            item_name: itemName,
            category: category,
            quantity: quantity,
            description: description,
            price: price,
        }
        formData.append('item',JSON.stringify(userItem))
        console.log(formData.get('file'))
        $.ajax({
            type:'post',
            url: '/api/sellitem',
            data: formData,
            contentType: false,
            processData: false
        }).then((results)=>{
            console.log(results)
            window.location.replace("/shop")
            return false 
        })
        // if(typeof price != "number") {
        //     return alert("Price must be a number!");
        // }
        // createItem(userItem);
        .catch(err=> console.log(err))
    });

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

