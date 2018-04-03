$('#boxes').on('click', function(event){
	var listClasses = event.target.parentNode.className;
	var boxColor = listClasses.split(' ')[0];

	if (boxColor) {
  	$("ul").attr("class", boxColor);
  } else {
  	$("ul").removeAttr("class");
  }
});