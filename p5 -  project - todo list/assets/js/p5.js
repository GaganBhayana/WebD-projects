//check off specific todo be clicking 

// $('li').on("click",function(){ ************************
$('ul').on("click","li",function(){  //note: we have done thi since on method works only for those elements which existed when this code run. but the new li's 
								 	//which are added later were not existed when this code run. therefore we applied listener on <ul> which do exists from the 
								 	//beginning. We write "li" so that it is triggered only when a <li> inside ul is clicked
	$(this).toggleClass("completed");	
	//if li is gray we toggle it to normal state
	//----------------------------------------------------------------------- the whole code below can be replaced by the above line
	// if($(this).css("color") === "rgb(128, 128, 128)")//rgb value of "gray")
	// {
	// 	$(this).css({
	// 		color:"black",
	// 		textDecoration:"none"
	// 	});	
	// }
	// else
	// {
	// 	$(this).css({
	// 		color:"gray",
	// 		textDecoration:"line-through"
	// 	});
	// }

}); 

//click o X to delete todo

// $("span").click(function(e){ **************
$("ul").on("click","span",function(e){ //here also we add action listener to <ul> which exists from the beginning and then it is triggered when a span 
										//inside that <ul> is pressed	
	$(this).parent().fadeOut(500,function() // we first fadeout and after that remove the element from out html
		{
			$(this).remove();
		});
	e.stopPropagation(); 
})

$("input[type='text']").keypress(function(e){
	if(e.which === 13) //Ascii code
	{	
		var todotext = $(this).val();
		$(this).val("");
		//now create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+todotext+"</li>");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})