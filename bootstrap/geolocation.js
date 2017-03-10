var greyscaleStyle = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#FFFFFF"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#777777"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#777777"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#777777"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#555555"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#AAAAAA"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#AAAAAA"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#AAAAAA"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#AAAAAA"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#999999"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
];

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
    zoom: 14,
    styles: greyscaleStyle
  });
  
    
  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: currentLocation,
    radius: 5000,
    type: ['liquor_store AND grocery_and_supermarket']
  }, callback);
    
 
    var icon = {
         url: "img/original.png", // url
         scaledSize: new google.maps.Size(80, 50), // size
         origin: new google.maps.Point(0,0), // origin
         anchor: new google.maps.Point(0,0) // anchor 
     };
  var currentMarker = new google.maps.Marker({
      position: currentLocation,
      map: map,
      title: 'Position',
      icon: icon
  });

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
