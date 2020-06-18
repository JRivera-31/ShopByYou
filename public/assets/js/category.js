$(function() {
    const categories = $("#mainCategories")
    const item = $(".item")
    let newItem = []

    categories.on("change",function(event){
        console.log(event.target.value);
        choooseCategory(event.target.value);
    
    })

    function choooseCategory(category){
        $.get(`/api/categories/${category}`)
        .then(items => {
            console.log(items);
        })
        .catch(function(err) {
            console.log(err);
        });
    }
});