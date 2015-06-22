app.controller('SingleTripController', ['$scope', 'SingleTripFactory', 'IndexFactory', function ($scope, SingleTripFactory, IndexFactory) {

    var singleTrip=SingleTripFactory.getTrip();

    IndexFactory.getCityCoords(singleTrip.DepPoint).then(function (position) {

        SingleTripFactory.getRoute(singleTrip.DepPoint, singleTrip.Destination).then(function (route) {
            console.log("aa");
            $scope.mapOptions = {
                center: new google.maps.LatLng(position.latitude, position.longitude),
                zoom: 4,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(document.getElementById('googleMapViewTrip'), $scope.mapOptions);
            var infoWindow = new google.maps.InfoWindow();

            var marker1 = new google.maps.Marker({
                map: map,
                title: singleTrip.DepPoint,
                content: '<h4 style="color:green">' + singleTrip.DepPoint + '</h4>',
                position: new google.maps.LatLng(position.latitude, position.longitude),
                icon: "/Content/Images/marker.png"
            });

            google.maps.event.addListener(marker1, 'click', function () {
                infoWindow.setContent('<h2>' + marker1.title + '</h2>' + marker1.content);
                infoWindow.open(map, marker1);
            });

            var marker2 = new google.maps.Marker({
                map: map,
                title: singleTrip.Destination,
                content: '<h4 style="color:green">' + singleTrip.Destination + '</h4>',
                position: new google.maps.LatLng(singleTrip.DestLat, singleTrip.DestLong),
                icon: "/Content/Images/marker.png"
            });

            google.maps.event.addListener(marker2, 'click', function () {
                infoWindow.setContent('<h2>' + marker2.title + '</h2>' + marker2.content);
                infoWindow.open(map, marker2);
            });


        });
    });
  //  $scope.GetSingleTrip = function (tripId) {
    //    SingleTripFactory.GetSingleTrip(tripId);
   // }

    //Just Added 6/14/2015. This Map is going to need to be updated so that we only show the trip in question AND we show the road directions from the origin
    //to the destination as well as any other pertinent data we can get from the API
    /*
    var createMap = function (userLocation, DeparturePoint, destination) {
        console.log(DeparturePoint, destination);
            $scope.mapOptions = {
                center: new google.maps.LatLng(userLocation.latitude, userLocation.longitude),
                zoom: 4,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              
            };

            var map = new google.maps.Map(document.getElementById('googleMapViewTrip'), $scope.mapOptions);

            var infoWindow = new google.maps.InfoWindow();

            var createMarker = function (destination, DeparturePoint, markerIndex) {
                var a = "/Content/Images/marker" + ((markerIndex == 0) ? "1" : "") + ".png";
                var marker = new google.maps.Marker({
                    map: map,
                    title: destination.Destination,
                    content: '<h4 style="color:green">' + destination.Count + 'trip(s)</h4></br><a href="#/AllTrips/' + DeparturePoint + '&' + destination.Destination + '">See trips</a>',
                    position: new google.maps.LatLng(destination.DestLatitud, destination.DestLongitud),
                    icon: "/Content/Images/marker" + ((markerIndex == 0) ? "1" : "") + ".png"
                })
                createMarker(destination, DeparturePoint, 0);
            }
   //         var createDepPointMarker = function (destination, DeparturePoint, markerIndex) {
    //            var a = "/Content/Images/marker" + ((markerIndex == 0) ? "1" : "") + ".png";
    //            var marker = new google.maps.Marker({
  //                map: map,
                //    title: destination.Destination,
               //     content: '<h4 style="color:green">' + destination.Count + 'trip(s)</h4></br><a href="#/AllTrips/' + DeparturePoint + '&' + destination.Destination + '">See trips</a>',
                    //NOTE: ONLY FOR TEST. To be replaced by actual departure point locations hard coded into DB based on actual dep point picked by Driver
       //             position: new google.maps.LatLng(userLocation.latitude, userLocation.longitude),
       //             icon: "/Content/Images/marker" + ((markerIndex == 0) ? "1" : "") + ".png"
       //         })

       //    }
           
       //     createDepPointMarker(destination, DeparturePoint, 0);
        }

        createMap({ latitude: 36.169941, longitude: -115.139830 }, SingleTripFactory.SingleTrip[0].DeparturePoint, SingleTripFactory.SingleTrip[0]);
    
        
        */
}]);