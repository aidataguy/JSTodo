// check off the todos on click
$("ul").on("click", "li", function() {
	$(this).toggleClass('completed');
	
	// long way to do the logic above
	// /* if li is gray */
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	// change to black
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// });
	// }
	// else {
	// 	// change to gray again
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// });

	// }
});

// click on X to delete the todo
$("ul").on("click", "span", function(event){
	// removes the parent element example - ul > li > span
	$(this).parent().fadeOut('1000', function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(keystroke) {
	/* Act on the keystroke if its == enter */
	if(keystroke.which === 13){
	  // grabs new todo 
	  var todoText = $(this).val();
	  $(this).val("");
	  // append the method
	  $("ul").append("<li><span><i class='typcn typcn-trash'></i></span> " + todoText + "</li>")
	}
});	 