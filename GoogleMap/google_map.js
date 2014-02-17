function initialize() {
        var map_canvas = document.getElementById('map_canvas');

        var myCenter = new google.maps.LatLng(13.816411,100.749795);

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
            content:'บริษัท ไว๊ท์ เนอร์สซิ่ง โฮม จำกัด'
        });

        // Zoom to 9 when clicking on marker
        google.maps.event.addListener(marker,'click',function(){
            map.setZoom(15);
            map.setCenter(marker.position);
        });

        infowindow.open(map,marker);

}

google.maps.event.addDomListener(window, 'load', initialize);

