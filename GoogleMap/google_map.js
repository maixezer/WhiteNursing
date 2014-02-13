function initialize() {
    	var map_canvas = document.getElementById('map_canvas');

    	var myCenter = new google.maps.LatLng(13.851851,100.56756);

        var map_options = {
          	center: myCenter,
          	zoom: 13,
          	mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options);

        var marker = new google.maps.Marker({
        	position: myCenter,
        });

        marker.setMap(map);

        var infowindow = new google.maps.InfoWindow({
        	content:'Kasetsart University Bangkhen Campus'
        });

        // Zoom to 9 when clicking on marker
        google.maps.event.addListener(marker,'click',function(){
        	map.setZoom(15);
        	map.setCenter(marker.position);
        });

 		infowindow.open(map,marker);

}
google.maps.event.addDomListener(window, 'load', initialize);
