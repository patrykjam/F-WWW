app = angular.module("myapp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl: 'pages/Home.html',
            controller: 'homeController'
        })

        // route for the about page
        .when('/contact', {
            templateUrl: 'pages/Kontakt.html',
            controller: 'contactController'
        })

        // route for the contact page
        .when('/shopInfo', {
            templateUrl: 'pages/Sklep.html',
            controller: 'shopController'
        })

        .when('/laptops', {
            templateUrl: 'pages/Laptopy.html'
        })

        .when('/tvs', {
            templateUrl: 'pages/Telewizory.html'
        })
    ;

});

app.controller("mainController", function ($scope, $http) {
    $scope.menus = [
        {
            title: "Strona główna",
            action: "#/"
        },
        {
            title: "O sklepie",
            action: "#shopInfo"
        },
        {
            title: "Katalog",
            action: "nothing",
            menus: [
                {
                    title: "Laptopy",
                    action: "#laptops"
                },
                {
                    title: "Telewizory",
                    action: "#tvs"
                }
            ]
        },
        {
            title: "Kontakt",
            action: "#contact"
        }
    ]
});

// create the controller and inject Angular's $scope
app.controller('homeController', function ($scope) {
    $scope.message = 'HOME';
});

// create the controller and inject Angular's $scope
app.controller('contactController', function ($scope) {
    $scope.message = 'KONTAKT';
});

app.controller('shopController', function ($scope) {
});


$(document).ready(function () {
});