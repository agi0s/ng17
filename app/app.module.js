(function () {
    'use strict';

    angular
        .module('app', [
            'ngRoute',
            /*
             * Feature areas
             */
            'app.cars',
            'app.core',
            'app.layout',
            'app.carDetail'
        ])
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/cars', {
                templateUrl: './modules/cars/cars.template.html',
                controller: 'CarsController',
                controllerAs: 'vm'
            })
            .when('/cars/:id', {
                templateUrl: './modules/car/car-detail.template.html',
                controller: 'carDetail',
                controllerAs: 'vm'
            })
            .otherwise('/cars');
    }

})();