//Check off Specific Todos by clicking
$("li").on("click", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete Todo