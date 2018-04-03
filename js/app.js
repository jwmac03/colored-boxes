$('#boxes').on('click', function(event){
	var listClasses = event.target.parentNode.className;
	var boxColor = listClasses.split(' ')[0];

	boxColor ? $("ul").attr("class", boxColor) : $("ul").removeAttr("class");
});