$(document).ready(function() {
	$(".js-plus").click(function () {
		if (checkInputData().isNumber) {
			showBubble(Number(getFirstWord()) + Number(getSecondWord()));	
		} else {
			showNotNumericData()
		}
	});
	$(".js-minus").click(function () {
		if (checkInputData().isNumber) {
			showBubble(Number(getFirstWord()) - Number(getSecondWord()));	
		} else {
			showNotNumericData()
		}
	});
	$(".js-multiply").click(function () {
		if (checkInputData().isNumber) {
			showBubble(Number(getFirstWord()) * Number(getSecondWord()));	
		} else {
			showNotNumericData()
		}
	});
	$(".js-divide").click(function() {
		if (checkInputData().isNumber) {
			showBubble(Number(getFirstWord()) / Number(getSecondWord()));	
		} else {
			showNotNumericData()
		}
	});


	// =================================================
	// =================================================

	function showNotNumericData() {
			if (getFirstWord() === '' || getSecondWord() === ''){
				showBubble('Пустышка');
			}  else {
				showBubble(getFirstWord() + ' ' + getSecondWord());
			}
	}

	function checkInputData() {
		if ($.isNumeric(getFirstWord()) && $.isNumeric(getSecondWord())) {
			return {
				isNumber: true
			}
		} else if (getFirstWord() === '' && getSecondWord() === ''){
			return {
				isNumber: false,
				isEmty: true
			}
		} else {
			return {
				isNumber: false,
				isEmty: false
			}
		}

	}

	function getFirstWord() {
		return $('.js-text1').val();
	}

	function getSecondWord() {
		return $('.js-text2').val();
	}

	function showBubble(text) {
		$(".bubble").text(text);
		$(".bubble").addClass('-visible');

		setTimeout(function (){
			$('.bubble').removeClass('-visible')
		}, 2000);
	}
	
});