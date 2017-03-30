$(document).ready(function(){

	//Some style

	$('body').css("background-color","#FDFDD8");

	//Create button
	$('body').append('<button>Reset</butto>');
	$('button').height("70px");
	$('button').width("150px");
	$('button').css("font-size","18pt");
	$('button').css("font-weight", "bold");
	$('button').css("border-radius","20px");
	$('button').css("background-color", "#295499");
	$('button').css("color", "white");

	//Creating the container div

	var boxes = 16;
	var size = boxes * 40;
	
	

	function recreate(num_box){

		$('body').append('<div class="container"></div>');
		$('.container').height(size);
		$('.container').width(size);
		$('.container').css("background-color", "#EDF1E9");
		$('.container').css("border", "1px solid black");
		$('.container').css("margin", "30px auto");

	//Creating the grid

	
		var box_size = size / num_box;
		for(i=1; i<=num_box; i++){

			for(j=1; j<=num_box; j++){
				$('.container').append('<div class="grid"></div>');
				$('.grid').height(box_size);
				$('.grid').width(box_size);
				$('.grid').css("display", "inline-block");
				$('.grid').css("float", "left");
			}
		}

	};
	
	recreate(boxes);


	//adding the hover functionality

	$('.grid').hover(function(){
		var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
		$(this).css("background-color", randomColor);
	});
	

	$('button').click(function(){
		$('.container').remove();
		//$('.grid').css("background-color", "white");
		boxes = prompt("How many squares per side?");
		recreate(boxes);
		$('.grid').hover(function(){
			var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);	
			$(this).css("background-color", randomColor);
		});
	

	});


});