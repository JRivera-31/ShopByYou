$(function() {
    const categories = $("#mainCategories")

    categories.on("change",function(event){
        window.location.replace("/categories/" + event.target.value)
    })

    function choooseCategory(category){
        $.get(`/shop/categories/${category}`)
        .then(items => {
            console.log(items);
            window.location.replace("/categories/" + category)
        })
        .catch(function(err) {
            console.log(err);
        });

    }
});