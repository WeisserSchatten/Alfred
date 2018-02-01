$(document).ready(function() {
	$(".js-sayThat").click(function () {
		showBubble($('.js-text1').val() + $('.js-text2').val())
	});

	function showBubble(text) {
		$(".bubble").text(text);
		$(".bubble").addClass('-visible');

		setTimeout(function (){
			$('.bubble').removeClass('-visible')
		}, 2000);
	}
	
});