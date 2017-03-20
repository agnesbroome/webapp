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
        
        $("#del").html('');
        $("#del").append("<a class='deleteB btn btn-default btn-lg' target='_blank'><span class='network-name'>CLEAR FAVORITES</span></a>");
    }
    

} else{
    $("#favoP").append("You haven't saved any favorites yet");
    
}


$("#save").on("click", ".saveB", function(data){
    
});
    
$(document).on('click', '.saveB', function(){
   
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
     jsonlist = JSON.parse(localStorage.getItem('searches'));
    $("#favoP").html('');
    for(x in jsonlist){
        $("#favoP").append('<h4> ' + '<span class="glyphicon glyphicon-film"></span>' + jsonlist[x]['movie'] + '</h4>');
        $("#favoP").append('<p id="favoMovie"> ' + '<span class="glyphicon glyphicon-glass"></span>' + jsonlist[x]['drink'] + '</p>');
    }
    $("#del").html('');
    $("#del").append("<a class='deleteB btn btn-default btn-lg' target='_blank'><span class='network-name'>CLEAR FAVORITES</span></a>");
})

$("#del").on("click", ".deleteB", function(){
    $(document).on('click', '.deleteB', function(){ 
        localStorage.clear();
        $("#favoP").html('');
        $("#favoP").append("You haven't saved any favorites yet");
        $("#del").html('');
  });
    
})

