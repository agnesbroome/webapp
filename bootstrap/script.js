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
                $("#resultOmdb").append("<h3>" + data.original_title + "</h3>" + "<h4>" + date.getFullYear() + "</h4>" + "<h4>" + data.production_countries[0]["name"] + "</h4");
                console.log(data);
                console.log('url:(https://image.tmdb.org/t/p/w640' + data['poster_path'] + ')');
                $("#resultOmdb").append('<img src="' + 'https://image.tmdb.org/t/p/w640' + data['poster_path'] + '">');
                $("#resultDiv").css('background', 'none');
                $("#resultDiv").css('background', 'url:(' + 'https://image.tmdb.org/t/p/w640' + data['poster_path'] + ') no-repeat center center scroll');
                isSuccess = true;
            }
        });

    //}
});
