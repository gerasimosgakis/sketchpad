$(document).ready(function(){




	//Creating the container div

	var boxes = 16;
	var size = boxes * 20;

	$('body').append('<div class="container"></div>');
	$('.container').height(size);
	$('.container').width(size);
	$('.container').css("border", "1px solid black");
	$('.container').css("margin", "30px auto");

	//Creating the grid

	
	var box_size = size / boxes;
	for(i=1; i<=boxes; i++){

		for(j=1; j<=boxes; j++){
			$('.container').append('<div class="grid"></div>');
			$('.grid').height(box_size);
			$('.grid').width(box_size);
			$('.grid').css("display", "inline-block");
			$('.grid').css("float", "left");
		}
	}


	



	//adding the hover functionality

		$('.grid').hover(function(){
			$(this).css("background-color", "green");
		});
	


});