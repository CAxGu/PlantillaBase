var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);//, 'ui.bootstrap', 'ngCookies', 'facebook']);//, 'ngCookies', 'facebook'

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
                // Home
                .when("/", {templateUrl: "frontend/modules/home/view/home.view.html", controller: "homeCtrl"})
            
              
                // else 404
                .otherwise("/", {templateUrl: "frontend/modules/home/view/home.view.html", controller: "homeCtrl"});
    }]);

/* app.config([
    'FacebookProvider',
    function (FacebookProvider) {
        var myAppId = '';
        FacebookProvider.init(myAppId);
    }
]); */
 