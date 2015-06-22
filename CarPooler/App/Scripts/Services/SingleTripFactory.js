app.factory('SingleTripFactory', ['$http', '$q', '$location', function ($http, $q, $location) {

    var o = {};
    var _trip;

    o.getRoute = function (origin,destination) {
        var q = $q.defer();
        $http({
            url: 'http://maps.googleapis.com/maps/api/directions/json?origin=' + origin + '&destination=' + destination,
            method: 'GET'
        }).success(function (data) {
            console.log(data);
        }).error(function (data) {
            alert(data);
        })
        return q.promise;
    }


    o.setTrip = function (trip) {
        _trip = trip;
    };

    o.getTrip = function () {
        return _trip;
    }

    return o;
}]);