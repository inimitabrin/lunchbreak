$(document).ready(function() {

function createMap (lat, lng, zoomVal) {
        var mapOptions = { 
          center: new google.maps.LatLng(lat,lng),
          zoom: zoomVal,
          scrollwheel: false,
          gestureHandling: 'cooperative',
          zoomControl: true,
          zoomControlOptions: {
              position: google.maps.ControlPosition.RIGHT_CENTER
          },
          scaleControl: false,
          streetViewControl: false,
          mapTypeControl: false
        };
      map = new google.maps.Map(document.getElementById("map"), mapOptions); 
      }  
      function initMap() { 
      if(navigator.geolocation) {  
      success = function(position) {    
      createMap(position.coords.latitude, position.coords.longitude,13); 
       var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            createMap(position.coords.latitude, position.coords.longitude, 15);

            var marker = new google.maps.Marker({
              position: pos,
              title: "Present Location"
            });

            map.setCenter(pos);
            marker.setMap(map); 
           var customControlDiv = document.createElement('div');
var customControl = new CustomControl(customControlDiv, map);

customControlDiv.index = 1;
map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(customControlDiv);

function CustomControl(controlDiv, map) {

    // Set CSS for the control border
    var controlUI = document.createElement('div');
    controlUI.style.marginTop = '5px';
    controlUI.style.marginLeft = '-6px';
    controlUI.style.paddingTop = '1px';
    controlUI.style.cursor = 'pointer';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to set the map to Home';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior
    var controlText = document.createElement('div');
    controlText.style.fontFamily = 'Arial,sans-serif';
    controlText.style.fontSize = '10px';
    controlText.style.paddingLeft = '4px';
    controlText.style.paddingRight = '4px';
    controlText.style.marginTop = '-8px';
    controlText.innerHTML = '<img src="images/currentloc.png">';
    controlUI.appendChild(controlText);

    // Setup the click event listeners
    google.maps.event.addDomListener(controlUI, 'click', function () {
        map.setCenter(pos);
    });
    } 
        };   
      error = function() {
      createMap(99.648493, -99.410812,12); 
      }    
      navigator.geolocation.getCurrentPosition(success, error);  
        } 
    }
initMap();
});