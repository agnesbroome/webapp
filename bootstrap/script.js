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
    //while (isSuccess == false){


        function makeAjax(){
            var movieID = getRandomID(Math.floor(Math.random()*900) + 100);
            console.log(movieID);
            $('#img').show();
            $("#resultOmdb").show();

        $.ajax({
            url: "https://api.themoviedb.org/3/movie/" + movieID + "?api_key=84257d453d689a1ebf94a3bd048f8e8e",
            dataType: "JSON",
            error: function(data){
                setTimeout(function (){
                    makeAjax();
                }, 500)
            },


            success: function(data){

                $("#resultOmdb").html('');

                var date = new Date (data.release_date);
                $("#resultOmdb").append('<div id="movieDetails"></div>');
                if (data.title != data.original_title){
                    $("#movieDetails").append("<h3>" + data.title + "</h3>" + "<h3 id='originalTitle'> <small>" +  data.original_title + "</small> </h3>" + "<h4>" + date.getFullYear() + "</h4>" + "<h4>" + data.production_countries[0]["name"] + "</h4>" + "<p>" + data.overview + "</p>");}
                else {
                    $("#movieDetails").append("<h3>" + data.original_title + "</h3>" + "<h4>" + date.getFullYear() + "</h4>" + "<h4>" + data.production_countries[0]["name"] + "</h4" + "<p>" + data.overview + "</p>");
                }
                console.log(data);
                console.log('url:("https://image.tmdb.org/t/p/w640' + data['poster_path'] + '")');
                $("#resultOmdb").prepend('<img id="posterMovie" src="' + 'https://image.tmdb.org/t/p/w640' + data['poster_path'] + '">');
                $("#movieDetails").css("marginTop", "7%");
                $("#originalTitle").css("margin-top", "-10%");
                $("#resultDiv").css('background', 'none');
                $("#resultDiv").css('background', 'url:("https://image.tmdb.org/t/p/w640' + data['poster_path'] + '") no-repeat center center scroll');
                $('#img').hide();
                isSuccess = true;
            }


        });
    };
    //}
    makeAjax();
});

