$(document).ready(function () {
	$(".box1").click(function () {
		$(this).hide("slow");
	});
	$(".box2").click(function () {
		$(this).hide("fast");
	});
	$(".box3").click(function () {
		$(this).hide(3000);
	});
	$(".box4").click(function () {
		$(this).hide(1000, function(){
			alert("The box4 is now hidden");
		});
	});

	$(".return").click(function () {
		$(".box").show("fast");
	});
});