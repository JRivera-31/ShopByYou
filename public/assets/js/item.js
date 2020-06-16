//inputting item up for sell
$(document).ready(function() {
    $("#itemForm").on("click", event => {
        event.preventDefault();
        let newItem = {
            //grabbing name values
            item_name: $('item').val().trim(),
            price: $('price').val().trim(),
            category: $('category').val().trim(),
            quantity: $('quantity').val().trim(),
            description: $('description').val().trim()
        };
        $.ajax('/api/item', {
            type: 'POST',
            data: newItem
        }).then(function() {
            console.log('Added item to database');
            location.reload();
        });
    });
    $(".")
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
   
