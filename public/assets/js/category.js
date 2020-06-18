$(function() {
    const categories = $("#mainCategories")
    const item = $(".item")

    categories.on("change",function(event){
        console.log(event.target.value);
        choooseCategory(event.target.value);
    
    })

    function choooseCategory(category){
        $.get(`/api/category/${category}`)
        .then(items => {
            console.log(items);
            window.location.replace("/categories/" + category)
        })
        .catch(function(err) {
            console.log(err);
        });

    }
});