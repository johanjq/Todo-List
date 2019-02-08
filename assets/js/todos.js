//Check off Specific Todos by clicking
//when we click on a li inside on an ul:
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
//we use stopPropagation to stop the event from bubbling up
//it means that will be selected the span and not parent elemnts 
$("ul").on("click", "span", function(event){
    //This: span. parent: entire line incluiding li.
    $(this).parent().fadeOut(500, function(){
        //We use remove to complete delete it
        //otherwise it will be just hidden
        //the second this below represents parent() = li
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text']").on("keypress",function(){
    //if we press enter(13)
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        //delete the todo text
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+ todoText + " </li>");
    }
});