var app = angular.module('app', ['ngRoute']).directive('customPopoverconfirmed', function () {
    return {
        restrict: 'A',
        template: '<span>{{t.UsersConfirmed.length}}</span>',
        link: function (scope, el, attrs) {
            $(el).popover({
                trigger: 'click',
                html: true,
                content: scope.getConfirmedUsersHtml(attrs.popoverUsersconfirmed),
                placement: attrs.popoverPlacement

            })

        }
    }
});


/*
var myapp = angular.module('myapp', ['ng-bootstrap-datepicker']);
angular.injector(['app','myapp']);
*/
app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: '/App/Views/Index.html',
        title: 'Index'
    }).when('/Register', {
        templateUrl: '/App/Views/Register.html',
        title: 'Register',
        caseInsentiveMatch: true
    }).when('/Login', {
        templateUrl: '/App/Views/Login.html',
        title: 'Login',
        caseInsentiveMatch: true
    }).when('/Index', {
        templateUrl: '/App/Views/Index.html',
        title: 'Index',
        caseInsentiveMatch: true
    }).when('/UserTrips', {
        templateUrl: '/App/Views/UserTrips.html',
        title: 'My Trips',
        caseInsentiveMatch: true
    }).when('/AllTrips/:Dest', {
        templateUrl: '/App/Views/AllTrips.html',
        title: 'AllTrips',
        caseInsentiveMatch: true
    }).when('/UserProfile/:Username', {
        templateUrl: '/App/Views/UserProfile.html',
        title: 'UserProfile',
    }).when('/AddUserProfile/', {
        templateUrl: '/App/Views/AddUserProfile.html',
        title: 'AddUserProfile',
        caseInsentiveMatch: true
    }).when('/EditProfile/', {
        templateUrl: '/App/Views/EditProfile.html',
        title: 'EditProfile',
        caseInsentiveMatch: true
    }).when('/ViewTrip/', {
        templateUrl: '/App/Views/ViewTrip.html',
        title: 'ViewTrip',
        caseInsentiveMatch: true
    }).otherwise({
        redirectTo: '/'
    });

}]);