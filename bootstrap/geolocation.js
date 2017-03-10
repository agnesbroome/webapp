var map, infowindow;

$(document).ready(function(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getGroceries, showError,{
      enableHighAccuracy: true
    });
  }
  else{
    alert("Din webbläsare stödjer inte geolocation!");
  }
});

function getGroceries(position){

  var currentLocation = {lat: position.coords.latitude, lng: position.coords.longitude};
  
  map = new google.maps.Map(document.getElementById('map'), {
    center: currentLocation,
    zoom: 14
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: currentLocation,
    radius: 5000,
    type: ['liquor_store AND grocery_and_supermarket']
  }, callback);
}

function callback(result, status){
  if (status === google.maps.places.PlacesServiceStatus.OK){
    for (var store = 0; store < result.length; store++){
      createMarker(result[store]);
    }
  }
}

function createMarker(place){
  var placeLoc = place.geometry.location;
  marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
  google.maps.event.addListener(marker, 'click', function(){
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

function showError(err){
  $("#test").html("Går ej!");
}
