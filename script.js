$(document).ready(function() {
	let superhiro = {
		name: "White shadow",
		age: 59,
		job: "nuclear physicist",

		params: {
			height: 150,
			weight: 35, 
			gender: "man",
			race: "Asian"
		},

		powers: {
			mainPower: 'shine',
			secondaryPower: "fly"
		}
	};

	$(".js-object").click(function() {
		showBubbleWithBlock('<div class ="bubble-test">Имя супергероя ' + superhiro.name + '!</div>');
	})


	let movies = ['apple','orange','banane','door'];
	$('.js-array').click(function() {
		movies.push(getSecondWord());
		showBubble(movies)
	})


	for (let i = 0; i<movies.length; i++) {
		$('.test-array').append('<div class="test-item">'+ movies[i] +'</div>')
	};












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
			if(getSecondWord() === "0") {
				showBubble("Так вымерли динозавры...")
			} else { 
				showBubble(Number(getFirstWord()) / Number(getSecondWord()));
			}
		} else {
			showNotNumericData()
		}
	});


	// =================================================
	// =================================================

	function showNotNumericData() {
			if (checkInputData().isEmty){
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
	function showBubbleWithBlock(block) {
		$(".bubble").append(block);
		$(".bubble").addClass('-visible');

		setTimeout(function (){
			$('.bubble').removeClass('-visible')
		}, 2000);
	}
	
});