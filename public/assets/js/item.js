//inputting item up for sell
$(function () {
    console.log('attached')
    // grabbing name values
    const formSubmit = $('#sellItem');
    
    formSubmit.submit(function (event) {
        // Prevent reload
        event.preventDefault();
        // Grabbing all of our values
        const itemName = $('.itemName').val().trim();
        const price = $('.price').val().trim();
        const category = $('#categories').val();
        const quantity = $(".quantity").val().trim()
        const description = $('.description').val().trim();
        const file = $("#userImg")[0].files[0]
        console.log(file)
        // Create new form for backend
        const formData = new FormData();
        // Append the img file
        formData.append('file', $("#userImg")[0].files[0])
        console.log('here')

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
            url: '/shop/sellitem',
            data: formData,
            contentType: false,
            processData: false
        }).then((results)=>{
            console.log(results)
            window.location.replace("/shop")
            return false 
        })
        .catch(err=> console.log(err))
    });
})

