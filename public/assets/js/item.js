
//inputting item up for sell
$(function () {
    console.log('attached')
    // grabbing name values
    const image = $('#userImg');
    const formSubmit = $('#sellItem');
    
    formSubmit.submit(function (event) {
        // Prevent reload
        event.preventDefault();
        // Grabbing all of our values
        const itemName = $('.itemName').val().trim();
        const price = $('.price').val().trim();
        const category = $('.category').val();
        const quantity = $('.quantity').val().trim();
        const description = $('.description').val().trim();
        const file = $("#userImg")[0].files[0]
        console.log(file)
        // Create new form for backend
        const formData = new FormData();
        // Append the img file
        formData.append('file', $("#userImg")[0].files[0])
        console.log('here')

        // Validate if price is not a number
        if(typeof price != "number") {
            return alert("Price must be a number!");
        }

        // Create object for values
        let userItem = {
            item_name: itemName,
            category: category,
            quantity: quantity,
            description: description,
            price: price,
        }
        // Append the the item object to the from and stringify it
        formData.append('item',JSON.stringify(userItem))
        console.log(formData.get('file'))
        // Post to our api
        $.ajax({
            type:'post',
            url: '/api/sellitem',
            data: formData,
            contentType: false,
            processData: false
        }).then((results) => {
            console.log(results)
            
        })
        .catch(err=> console.log(err))
    });


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

