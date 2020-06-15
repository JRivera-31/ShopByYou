//inputting item up for sell
$(function () {
    $(".ui inverted").on("click", event => {
        event.preventDefault();
        let newItem = {
            item_name: $('item').val().trim(),
            price: $('price').val().trim(),
            category: $('category').val().trim(),
            quantity: $('quantity').val().trim(),
            description: $('description').val().trim()
        };
        
    })
})