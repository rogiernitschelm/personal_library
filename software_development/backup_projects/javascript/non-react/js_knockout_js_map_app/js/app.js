var tagList = []; // Taglist for autocomplete
var mapLat = "46.5836127"; // Map initial center
var mapLng = "3.0616206"; // 

// Wikipedia Ajax-function

function loadData(marker) {

    var wikipediaUrl =
        'http://en.wikipedia.org/w/api.php?action=opensearch&limit=1&search=' + // Maximize to 1 wiki link (with limit)
        marker.name +
        '&format=json&callback=wikiCallback';
    var wikiRequestTimeout = setTimeout(function() {
        alert("There seems to be a problem. Resources from Wikipedia could not be loaded."); // Error handler
    }, 6000);
    $.ajax({
        url: wikipediaUrl,
        dataType: "jsonp",
        success: function(response) {
            var wikiTitle = response[1];
            marker.description = response[2];
            var url = 'http://en.wikipedia.org/wiki/' + wikiTitle;
            marker.wikipedia = '<li><a href="' + url + '" target="_blank">' + wikiTitle + '</a></li>';
            console.log(marker.description);
            infowindow.setContent(
                "<div class='infowindows'><b>Monument: </b><br>" +
                marker.name +
                "<br><br>" +
                marker.description +
                "<br><br><b>Wikipedia:</b><br>" +
                marker.wikipedia +
                "<br><b>Flickr photo's:</b><br>" +
                marker.flickr +
                "</div>");
            clearTimeout(wikiRequestTimeout);
        }
    });
}

// Second API, Flickr. Only used the public one due to there only being a need for photo viewing of public photo's.

function loadPhoto(marker) {

    var photoSet = [];
    var flickrRequestTimeout = setTimeout(function() {
        alert("There seems to be a problem. Resources from Flickr could not be loaded."); // Error handler
    }, 6000);

    var flickrUrl = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(flickrUrl, {
            tags: marker.name,
            tagmode: "any",
            format: "json"
        })
        // Appends the photo's to the infowindow

    .done(function(data) {
        $.each(data.items, function(i, item) {
            console.log(item.media.m);

            photoSet.push("<img src='" + item.media.m + "'>");
            console.log(photoSet);
            marker.flickr = photoSet;
            if (i === 6) {
                return false;
            }
            infowindow.setContent(
                "<div class='infowindows'><b>Monument: </b><br>" +
                marker.name +
                "<br><br>" +
                marker.description +
                "<br><br><b>Wikipedia:</b><br>" +
                marker.wikipedia +
                "<br><b>Flickr photo's:</b><br>" +
                marker.flickr +
                "</div>");
            clearTimeout(flickrRequestTimeout);
        });
    });
}

// Initializing Google Maps

function initMap() {

    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: new google.maps.LatLng(mapLat, mapLng),
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.HYBRID,
    });

    infowindow = new google.maps.InfoWindow();
    var listLocationsLength = listLocations.length;

    // Placing the icons on the map for every hard-coded location.

    for (var i = 0; i < listLocationsLength; i++) {

        // Changing the icon to a corresponding flag. Along with the size of the icons on the map.
        var imageBase = "images/";
        var location = listLocations[i];
        var image = new google.maps.MarkerImage(imageBase + listLocations[i].banner, null, null,
            new google.maps.Point(30, 30),
            new google.maps.Size(30, 30));
        var latLng = new google.maps.LatLng(listLocations[i].lat, listLocations[i].lng);
        var marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            map: map,
            position: latLng,
            icon: image,
            name: listLocations[i].name
        });
        tagList.push(location.name); // Taglist added to be used by auto-complete.
        location.marker = marker;

        marker.addListener('visible_changed', function() { // Added in resubmission, to hide the marker when its visibility changes
            infowindow.close(map, marker);
        });

        // Opening infowindows on clicking the hard-coded markers.

        google.maps.event.addListener(marker, 'click', (function(marker, i) {

            return function() {
                infowindow.open(map, marker);
                toggleBounce(marker);
                loadData(marker, infowindow);
                loadPhoto(marker, infowindow);
            };

            // Animating the markers when clicked

            function toggleBounce(marker) {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                    setTimeout(stopBounce, 2100); // Exactly 3 bounces when clicking

                    function stopBounce() {
                        marker.setAnimation(null);
                    }
                }
            }
        })(marker, i));

    }
    ko.applyBindings(new AppViewModel());

}

var alertMaps = "Nom de Dieu! The map didn't load.";
var mapsError = function() {
    alert(alertMaps);
};
// Constructer used for storing reference (needed for view list to work)

var storage = function(data) {
    this.name = ko.observable(data.name);
};

// The Viewmodel/Octopus of this app

var AppViewModel = function() {
    var self = this;
    self.locationList = ko.observableArray([]);
    listLocations.forEach(function(location) {
        self.locationList.push(new storage(location));
    });
    self.currentLocation = ko.observable(self.locationList()[0]);
    self.locations = ko.observableArray(listLocations);
    self.query = ko.observable("");
    self.toggleMarker = function(listMarker) { // Activates the marker when clicking on the list.
        self.currentLocation(listMarker);
        google.maps.event.trigger(listMarker.marker, 'click');
    };
    self.search = ko.computed(function() {
        return ko.utils.arrayFilter(self.locations(), function(location) {
            if (location.name.toLowerCase().indexOf(self.query().toLowerCase()) >= 0) {
                location.marker.setVisible(true);
                return true;

            } else {
                location.marker.setVisible(false);
                return false;
            }
        });
    });

};

// Auto-complete function, using tagList (placed in for-loop that creates markers)

$(function() {
    $("#tags").autocomplete({
        source: tagList,
        autoFocus: true,
    });
});