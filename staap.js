function staap_showmap(){
//just call it and prepare div with name "#mapContainer"
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var coords = new google.maps.LatLng(latitude, longitude);
        var mapOptions = {
            zoom: 15,
            center: coords,
            mapTypeControl: true,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.SMALL
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(
                document.getElementById("mapContainer"), mapOptions
                );
            var marker = new google.maps.Marker({
                    position: coords,
                    map: map,
                    title: "Your current location!"
            });
 
        });
    }else {
        alert("Geolocation API is not supported in your browser.");
    }
	<!--Gmaps script -->
	

window.google = window.google || {};
google.maps = google.maps || {};
(function() {
  
  function getScript(src) {
    document.write('<' + 'script src="' + src + '"' +
                   ' type="text/javascript"><' + '/script>');
  }
  
  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  };
  
  google.maps.Load = function(apiLoad) {
    delete google.maps.Load;
    apiLoad([0.009999999776482582,[[["http://mt0.googleapis.com/vt?lyrs=m@248000000\u0026src=api\u0026hl=en-US\u0026","http://mt1.googleapis.com/vt?lyrs=m@248000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"m@248000000",["https://mts0.google.com/vt?lyrs=m@248000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.google.com/vt?lyrs=m@248000000\u0026src=api\u0026hl=en-US\u0026"]],[["http://khm0.googleapis.com/kh?v=144\u0026hl=en-US\u0026","http://khm1.googleapis.com/kh?v=144\u0026hl=en-US\u0026"],null,null,null,1,"144",["https://khms0.google.com/kh?v=144\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=144\u0026hl=en-US\u0026"]],[["http://mt0.googleapis.com/vt?lyrs=h@248000000\u0026src=api\u0026hl=en-US\u0026","http://mt1.googleapis.com/vt?lyrs=h@248000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"h@248000000",["https://mts0.google.com/vt?lyrs=h@248000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.google.com/vt?lyrs=h@248000000\u0026src=api\u0026hl=en-US\u0026"]],[["http://mt0.googleapis.com/vt?lyrs=t@132,r@248000000\u0026src=api\u0026hl=en-US\u0026","http://mt1.googleapis.com/vt?lyrs=t@132,r@248000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"t@132,r@248000000",["https://mts0.google.com/vt?lyrs=t@132,r@248000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.google.com/vt?lyrs=t@132,r@248000000\u0026src=api\u0026hl=en-US\u0026"]],null,null,[["http://cbk0.googleapis.com/cbk?","http://cbk1.googleapis.com/cbk?"]],[["http://khm0.googleapis.com/kh?v=83\u0026hl=en-US\u0026","http://khm1.googleapis.com/kh?v=83\u0026hl=en-US\u0026"],null,null,null,null,"83",["https://khms0.google.com/kh?v=83\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=83\u0026hl=en-US\u0026"]],[["http://mt0.googleapis.com/mapslt?hl=en-US\u0026","http://mt1.googleapis.com/mapslt?hl=en-US\u0026"]],[["http://mt0.googleapis.com/mapslt/ft?hl=en-US\u0026","http://mt1.googleapis.com/mapslt/ft?hl=en-US\u0026"]],[["http://mt0.googleapis.com/vt?hl=en-US\u0026","http://mt1.googleapis.com/vt?hl=en-US\u0026"]],[["http://mt0.googleapis.com/mapslt/loom?hl=en-US\u0026","http://mt1.googleapis.com/mapslt/loom?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=en-US\u0026","https://mts1.googleapis.com/mapslt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/ft?hl=en-US\u0026"]]],["en-US","US",null,0,null,null,"http://maps.gstatic.com/mapfiles/","http://csi.gstatic.com","https://maps.googleapis.com","http://maps.googleapis.com"],["http://maps.gstatic.com/intl/en_us/mapfiles/api-3/15/5","3.15.5"],[242463876],1,null,null,null,null,0,"",null,null,0,"http://khm.googleapis.com/mz?v=144\u0026",null,"https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"http://mt.googleapis.com/vt/icon",[["http://mt0.googleapis.com/vt","http://mt1.googleapis.com/vt"],["https://mts0.googleapis.com/vt","https://mts1.googleapis.com/vt"],[null,[[0,"m",248000000]],[null,"en-US","US",null,18,null,null,null,null,null,null,[[47],[37,[["smartmaps"]]]]],0],[null,[[0,"m",248000000]],[null,"en-US","US",null,18,null,null,null,null,null,null,[[47],[37,[["smartmaps"]]]]],3],[null,[[0,"m",248000000]],[null,"en-US","US",null,18,null,null,null,null,null,null,[[50],[37,[["smartmaps"]]]]],0],[null,[[0,"m",248000000]],[null,"en-US","US",null,18,null,null,null,null,null,null,[[50],[37,[["smartmaps"]]]]],3],[null,[[4,"t",132],[0,"r",132000000]],[null,"en-US","US",null,18,null,null,null,null,null,null,[[5],[37,[["smartmaps"]]]]],0],[null,[[4,"t",132],[0,"r",132000000]],[null,"en-US","US",null,18,null,null,null,null,null,null,[[5],[37,[["smartmaps"]]]]],3],[null,null,[null,"en-US","US",null,18],0],[null,null,[null,"en-US","US",null,18],3],[null,null,[null,"en-US","US",null,18],6],[null,null,[null,"en-US","US",null,18],0],["https://mts0.google.com/vt","https://mts1.google.com/vt"],"/maps/vt"],2,500], loadScriptTime);
  };
  var loadScriptTime = (new Date).getTime();
  getScript("http://maps.gstatic.com/intl/en_us/mapfiles/api-3/15/5/main.js");
})();
}//end function show map

//fucntion calculate distance between 2 b points 

    function distance(latitude1, longitude1, latitude2, longitude2) { 
      // R is the radius of the earth in kilometers 
var R = 6371;  
 
      var deltaLatitude = toRadians(latitude2-latitude1); 
var deltaLongitude = toRadians(longitude2-longitude1); 
      latitude1 =toRadians(latitude1); 
 latitude2 =toRadians(latitude2); 
 
var a = Math.sin(deltaLatitude/2) * 
Math.sin(deltaLatitude/2) + 
              Math.cos(latitude1) * 
              Math.cos(latitude2) * 
Math.sin(deltaLongitude/2) * 
Math.sin(deltaLongitude/2); 
 
      var c = 2 * Math.atan2(Math.sqrt(a), 
Math.sqrt(1-a)); 
      var d = R * c; 
      return d; 
} 
function toRadians(degree) { 
      return degree * Math.PI / 180; 
    } 
 
