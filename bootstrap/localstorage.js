$(document).ready(function(){
    var drink = localStorage.getItem('drinkList');
    var movie = localStorage.getItem('movieList'); 
});

$("#save").on("click", ".saveB", function(data){
    var movieList = $("#originalTitle").text();
    var drinkList = $("#drinkName").text();
    localStorage.setItem("movieList", movieList);
    localStorage.setItem("drinkList", drinkList);
    var testObject = { "movieList": movieList, "drinkList": drinkList  };
console.log('typeof testObject: ' + typeof testObject);
console.log('testObject properties:');
for (var prop in testObject) {
    console.log('  ' + prop + ': ' + testObject[prop]);
}
    
    
    for(var i in localStorage)
{
    
    console.log(localStorage[i]);
    
    
}
});





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