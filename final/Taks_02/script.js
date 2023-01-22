$(document).ready(function () {
	let isShown = true;
	$(".panel").click(function () {
		if (isShown) {
			$(".notification").hide();
			isShown = !isShown;
		} else {
			$(".notification").show();
			isShown = !isShown;
		}
	});
});