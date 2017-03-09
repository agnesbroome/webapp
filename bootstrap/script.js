function getRandomID(number, length) {
  var str = '' + number;
  while(str.length < length) {
    str = '0' + str;
  }
  return str;
}
getRandomID();




$("#random").on("click", function getMovie () {
    var movieID = getRandomID(Math.floor((Math.random() * 2155529) + 1), 7);
console.log(movieID);
    $("#resultOmdb").show();
    $.ajax({
        url: "http://www.omdbapi.com/?i=tt" + movieID + "&y=&plot=short&r=json",
        dataType: "JSON",
        success: function(data){
            console.log(data);
        }
    })
});
getMovie ();
