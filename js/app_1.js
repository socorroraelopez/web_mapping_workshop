///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'srlopez.lih87df9'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1Ijoic3Jsb3BleiIsImEiOiIyVE4xbXRFIn0.x4qp77xdwt-INo6z73AWjQ'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);

var dataFiletoAdd = 'data/parks.geojson'
var featureLayer = L.mapbox.featureLayer().loadURL(dataFileTo Add).addTo(map);
featureLayer.om('ready', function(){
  this.setStyle({
    'color':'#green',
    'fillColor': '#green',
    'weight': 4,
    'opacity':.6
  });
  map.fitBounds(featureLayer.getBounds());

});

