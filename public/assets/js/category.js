$(function() {
    const categories = $("#mainCategories")

    categories.on("change",function(event){
        window.location.replace("/categories/" + event.target.value)
    })
});