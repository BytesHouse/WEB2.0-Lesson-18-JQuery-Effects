// $(document).ready(function(){
// 	let R = 255;
// 	let G = 255;
// 	let B = 255;

//   	$("#R").on("input", function(){
//   		R = this.value;
//     	$("#R_value").text(R);
//     	$("body").css("background", `rgb(${R}, ${G}, ${B})`);
//   	});

//   	$("#G").on("input", function(){
//   		G = this.value;
//     	$("#G_value").text(G);
//     	$("body").css("background", `rgb(${R}, ${G}, ${B})`);
//   	});

//   	$("#B").on("input", function(){
//   		B = this.value;
//     	$("#B_value").text(B);
//     	$("body").css("background", `rgb(${R}, ${G}, ${B})`);
//   	});
// });

//let startTime = $.now();

// $(document).ready(function(){
//   $(".btn").click(function() {
//     $(this).hide();
//   });
// });
$(document).ready(function() {
	$(".mistake").hide();

	$("#pswd").change(function () {
		let pswd = $(this).val();
		$(".mistake").hide();
		if (pswd.length < 8) {
			$("#length").show();
		}
		if (!pswd.match(/[A-z]/)) {
			$("#letter").show();
		}
		if (!pswd.match(/[A-Z]/)) {
			$("#Uletter").show();
		}
		if (!pswd.match(/[0-9]/)) {
			$("#digit").show();
		}
	});
	// $('input[type=password]').keyup(function() {

	// // set password variable
	// var pswd = $(this).val();
	// //validate the length
	// if ( pswd.length < 8 ) {
	// 	$('#length').removeClass('valid').addClass('invalid');
	// } else {
	// 	$('#length').removeClass('invalid').addClass('valid');
	// }
	// //validate letter
	// if ( pswd.match(/[A-z]/) ) {
	// 	$('#letter').removeClass('invalid').addClass('valid');
	// } else {
	// 	$('#letter').removeClass('valid').addClass('invalid');
	// }

	// //validate capital letter
	// if ( pswd.match(/[A-Z]/) ) {
	// 	$('#capital').removeClass('invalid').addClass('valid');
	// } else {
	// 	$('#capital').removeClass('valid').addClass('invalid');
	// }

	// //validate number
	// if ( pswd.match(/[0-9]/) ) {
	// 	$('#number').removeClass('invalid').addClass('valid');
	// } else {
	// 	$('#number').removeClass('valid').addClass('invalid');
	// }

	// }).focus(function() {
	// 	$('#pswd_info').show();
	// }).blur(function() {
	// 	$('#pswd_info').hide();
	// });

});
