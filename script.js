var gridSize = 16

$(document).ready ( function() {
	$("#drawing").click(function(){
		gridSize = $("#number").val();		
		makeGrid("drawing");
		$("#wrapper").on('mousedown mouseup', function mouseState(e){
		    if (e.type == "mousedown") {
				$(".drawing").mouseenter(function(){
						$(this).css("background-color","#721330");
				});
			} else {
					$(".drawing").unbind('mouseenter mouseleave');
			}
		})
	});

	$("#trailing").click(function(){
		gridSize = $("#number").val();
		makeGrid("trailing");
		$(".trailing").hover(function(){
			$(this).css("background-color","#721330")
		}, function(){
			$(this).animate({backgroundColor: "#Be5f7c"}, 500)
		});
	});
});



var makeGrid = function(x){
	$(".grid").remove();
	for( var i = 0; i < (gridSize*gridSize); i += 1) {
		makeDiv(x);
	};

	var blockSize = Math.floor(500.0 / gridSize);
	$(".grid").height(blockSize + 'px');
	$(".grid").width(blockSize +'px');
	$("#wrapper").width(blockSize*gridSize)
	$("#wrapper").height(blockSize*gridSize)
	var marginSetting = (500 - (blockSize*gridSize))/2
	$("#wrapper").css("margin-top",  marginSetting+"px")
};


var makeDiv = function(x){
	$("#wrapper").append("<div class='grid " + x + "'></div>");
};




