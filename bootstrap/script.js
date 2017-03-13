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
        var movieID = getRandomID(Math.floor(Math.random()*900) + 100);
        console.log(movieID);
        $('#img').show();
        $("#resultOmdb").show();
        
        $.ajax({
            url: "https://api.themoviedb.org/3/movie/" + movieID + "?api_key=84257d453d689a1ebf94a3bd048f8e8e",
            dataType: "JSON",
            timeout: 2000, 
            error: function(data){
                
                isSuccess = false;
                $('#resultOmdb').html("dff");
            },
            
            
            success: function(data){
                
                $("#resultOmdb").html('');
               
                var date = new Date (data.release_date);
                $("#resultOmdb").append('<div id="movieDetails"></div>');
                $("#movieDetails").append("<h3>" + data.original_title + "</h3>" + "<h4>" + date.getFullYear() + "</h4>" + "<h4>" + data.production_countries[0]["name"] + "</h4");
                console.log(data);
                console.log('url:(https://image.tmdb.org/t/p/w640' + data['poster_path'] + ')');
                $("#resultOmdb").prepend('<img id="posterMovie" src="' + 'https://image.tmdb.org/t/p/w640' + data['poster_path'] + '">');
                $("#resultOmdb img").css("float", "left");
                $("#movieDetails").css("float", "left");
                $("#movieDetails").css("marginLeft", "7%");
                $("#movieDetails").css("marginTop", "7%");
                $("#resultDiv").css('background', 'none');
                $("#resultDiv").css('background', 'url:(' + 'https://image.tmdb.org/t/p/w640' + data['poster_path'] + ') no-repeat center center scroll');
                $('#img').hide();
                isSuccess = true;
            }
                
           
        });
    
    //}
});


