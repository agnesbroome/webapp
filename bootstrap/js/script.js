var movieDrinkCountry = "United States of America";

function getRandomID(number, length) {
	var str = '' + number;
	while (str.length < length) {
		str = '0' + str;
	}
	return str;
}
getRandomID();
$("#random").on("click", function getMovie() {
	var isSuccess = false;

	function makeAjax() {
		var movieID = getRandomID(Math.floor(Math.random() * 900) + 100);
		$('.img').show();
		$("#resultOmdb").show();
		$.ajax({
			url: "https://api.themoviedb.org/3/movie/" + movieID + "?api_key=84257d453d689a1ebf94a3bd048f8e8e",
			dataType: "JSON",
			error: function(data) {
				setTimeout(function() {
					makeAjax();
				}, 500)
			},
			success: function(data) {
				movieDrinkCountry = data.production_countries[0]['name'];
				$("#resultOmdb").html('');
				var date = new Date(data.release_date);
				$("#resultOmdb").append('<div id="movieDetails"></div>');
				if (data.title != data.original_title) {
					$("#movieDetails").append("<h3>" + data.title + "</h3>" + "<h3 id='originalTitle'> <small>" + data.original_title + "</small> </h3>" + "<h4>" + date.getFullYear() + "</h4>" + "<h4>" + data.production_countries[0]["name"] + "</h4>" + "<p>" + data.overview + "</p>");
				} else {
					$("#movieDetails").append("<h3 id='originalTitle'>" + data.original_title + "</h3>" + "<h4>" + date.getFullYear() + "</h4>" + "<h4>" + data.production_countries[0]["name"] + "</h4>" + "<p>" + data.overview + "</p>");
				}
				$("#movieDetails").append('<ul class="list-inline banner-social-buttons"><a class="page-scroll" href="#favorite"><li id="save"></li></a></ul>');
				$("#save").html('');
				$("#save").append("<a class='saveB btn btn-default btn-lg' target='_blank'><span class='network-name'>SAVE FOR LATER</span> </a>");
				$("#resultOmdb").prepend('<img id="posterMovie" src="' + 'https://image.tmdb.org/t/p/w640' + data['poster_path'] + '">');
				$("#resultDiv").css('background', 'none');
				$("#resultDiv").css('background', 'url:("https://image.tmdb.org/t/p/w640' + data['poster_path'] + '") no-repeat center center scroll');
				$('.img').hide();
				isSuccess = true;
			}
		});
	};
	makeAjax();
});
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	$('#back-to-top').click(function() {
		$('#back-to-top').tooltip('hide');
		$('body,html').animate({
			scrollTop: 0
		}, 900);
		return false;
	});
	$('#back-to-top').tooltip('show');
});
$(document).ready(function() {
	window.onbeforeunload = function() {
		window.scrollTo(0, 0);
	}
});