$(function() {
    //get favorites from local storage or show empty array
    //let favorites= JSON.parse(localStorage.get("favorites") || []);
    let favorited;
    if(localStorage.getItem("favorites")) {
        //show elements if there is a favorited item
        $("<h3>").show();
        $("<span>").show();
        $(".description").show();
        $(".meta").show();
        favorited = localStorage.getItem("favorites").split(",");
        favoriteItems();
    } else {
        favorited = [];
    }
    
    function favoriteItems({
    
    })

    //onclick event for favorite button
    $("ui inverted pink button").on("click", function() {
        //conditional: if the item includes a data attrivute then: 
        //push item into local storage
        //set the item to local storage
        
    })
})