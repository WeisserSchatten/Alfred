$(document).ready(function() {
	$(".js-plus").click(function () {
		showBubble(Number(getFirstWord()) + Number(getSecondWord()));
	});
	$(".js-minus").click(function () {
		showBubble(Number(getFirstWord()) - Number(getSecondWord()));
	});
	$(".js-multiply").click(function () {
		showBubble(Number(getFirstWord()) * Number(getSecondWord()));
	});
	$(".js-divide").click(function() {
		if (checkInputData().isNumber) {
			showBubble(Number(getFirstWord()) / Number(getSecondWord()));	
		} else {
			if (checkInputData().isEmty) {
				showBubble('Пустышка');
			} else {
				showBubble(getFirstWord() + ' ' + getSecondWord());
			}
		}
	});


	// =================================================
	// =================================================

	function checkInputData() {
		// если введено значение в цифрах то идет продожение функции
		// если переменная имеет буквенное значение мы выводим надпись
		// если значение равно нулю то опять же выводим надпись

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