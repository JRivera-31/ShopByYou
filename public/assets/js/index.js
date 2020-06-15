//inputting item up for sell
$(function () {
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
        $.ajax('/api/', {
            type: 'POST',
            data: newItem
        }).then(function() {
            console.log('Added item to database');
            location.reload();
        });
    });
    
})