function getRandomID(number, length) {
  var str = '' + number;
  while(str.length < length) {
    str = '0' + str;
  }
  return str;
}
getRandomID();


$("#random").on("click", function getMovie() {
    var isSuccess = false;
    //while (!isSuccess){
        var movieID = getRandomID(Math.floor(Math.random()*900) + 100);
    console.log(movieID);
        $("#resultOmdb").show();
        $.ajax({
            url: "https://api.themoviedb.org/3/movie/" + movieID + "?api_key=84257d453d689a1ebf94a3bd048f8e8e",
            dataType: "JSON",
            error: function(xhr){
                isSuccess = false;
            },
            success: function(data){
                var date = new Date (data.release_date);
                $("#resultOmdb").append('<div id="movieDetails"></div>');
                $("#movieDetails").append("<h3 id='textFloat1'>" + data.original_title + "</h3>" + "<h4 id='textFloat2'>" + date.getFullYear() + "</h4>" + "<h4 id='textFloat3'>" + data.production_countries[0]["name"] + "</h4");
                console.log(data);
                console.log('url:(https://image.tmdb.org/t/p/w640' + data['poster_path'] + ')');
                $("#resultOmdb").prepend('<img id="posterMovie" src="' + 'https://image.tmdb.org/t/p/w640' + data['poster_path'] + '">');
                $("#resultOmdb img").css("float", "left");
                $("#movieDetails").css("float", "right");
                $("#resultDiv").css('background', 'none');
                $("#resultDiv").css('background', 'url:(' + 'https://image.tmdb.org/t/p/w640' + data['poster_path'] + ') no-repeat center center scroll');
                isSuccess = true;
            }
        });

    //}
});
