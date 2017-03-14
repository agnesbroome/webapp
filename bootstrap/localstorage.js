$(document).ready(function(){
    var drink = localStorage.getItem('drink');
    var movie = localStorage.getItem('movie'); 
});

if(localStorage.getItem('searches')){
    jsonlist = JSON.parse(localStorage.getItem('searches'));
    $("#favoP").html('');
    for(x in jsonlist){
        $("#favoP").append('<h4> ' + '<span class="glyphicon glyphicon-film"></span>' + jsonlist[x]['movie'] + '</h4>');
        $("#favoP").append('<p id="favoMovie"> ' + '<span class="glyphicon glyphicon-glass"></span>' + jsonlist[x]['drink'] + '</p>');
    }
    

} else{
    $("#favoP").append("No favorites saved.....");
}


$("#save").on("click", ".saveB", function(data){
    var movie = $("#originalTitle").text();
    var drink = $("#drinkName").text();
    //localStorage.setItem("movie", movie);
    //localStorage.setItem("drink", drink);
    var oldSearch = localStorage.getItem('searches');
    var savedSearch = JSON.parse(oldSearch);
    if (savedSearch == null){
        savedSearch = [];
        
    }
    console.log(savedSearch);
    var search = {
        'movie': movie,
        'drink': drink
    }
    savedSearch.push(search);
    console.log(savedSearch);
    savedSearch = JSON.stringify(savedSearch);
    localStorage.setItem('searches', savedSearch);
});
    
$(document).on('click', '.saveB', function(){
    jsonlist = JSON.parse(localStorage.getItem('searches'));
    $("#favoP").html('');
    for(x in jsonlist){
        $("#favoP").append('<h4> ' + '<span class="glyphicon glyphicon-film"></span>' + jsonlist[x]['movie'] + '</h4>');
        $("#favoP").append('<p id="favoMovie"> ' + '<span class="glyphicon glyphicon-glass"></span>' + jsonlist[x]['drink'] + '</p>');
    }
    
})

//console.log(Object.keys('searches'));
//var months = ['Jan', 'Feb', 'Mar', 'Apr'];
//months.toString(); // "Jan,Feb,Mar,Apr"




   /* for(var i in localStorage)
{
    
    console.log(localStorage[i]);
    
    
};
});*/





/*
var searches = [
    {
        'movie': 'bla',
        'drink': 'bla'
    }
];

var newsearch = {
    'movie': 'böa',
    'drink': 'bla'
}


*/






















// Vår array med filmer, två filmer inlagda som exempeldata
/*var movies = 
    (data.title);*/

/*function printMovies(){
   @TODO Skriver ut alla filmerna i vår array "movies" 
}

$("#save-movie").on("click", function(e){
  /* @TODO Sparar en film i vår array "movies" när vi klickar på knappen "Spara film"
    och skriver sedan ut den uppdaterade listan av filmer genom funktionen "printMovies"
  
});*/

/*$("#saveB").on("click", function(){
	var JSONMovies = JSON.stringify(movies);
	localStorage.setItem("movies", JSONMovies);
    console.log(movies);
});
function();*/

/*$("#load-movies").on("click", function(){
  /* @TODO Läser in våra filmer från localStorage och skriver ut dessa i vår lista på sidan,
    samt sparar filmerna i vår array "movies"
  
});

$("#order-alphabetic").on("click", function(){
  /* @TODO Sorterar filmerna alfabetiskt 
});

$("#order-grade").on("click", function(){
  /* @TODO Sorterar filmerna efter betyg 
});

$(".delete-movie").on("click", function(){
  /* @TODO Tar bort en film från vår array 
});

function getStars(grade){
  /* @TODO genererar stjärnor till när filmerna ska visas
    Returnerar HTML-kod för så många stjärnor som parametern "grade" anger 
}

// Skriver ut att filmerna i vår lista när sidan laddats klart
printMovies();*/