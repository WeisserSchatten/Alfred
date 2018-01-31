$(document).ready(function() {

	var heroSpeech = 'Остался вместе с былой славой DS';

	$('.js-showHide').click(function() {
		$('.hero').toggleClass('-invisible')
	});
	$('.js-hello').click(function() {
		$('.bubble').addClass('-visible').text(heroSpeech);
	});	
});