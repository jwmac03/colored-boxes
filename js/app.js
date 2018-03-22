$('#boxes').on('click', function(event){
	var boxColor = event.target.innerHTML.toLowerCase();
	if (boxColor !== "reset"){
		$("ul").attr("class", boxColor);
	} else {
		$("ul").removeAttr("class");
	}
});