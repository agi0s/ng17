(function () {
    'use strict';

    angular
        .module('app', [
            'ngRoute',
            /*
             * Features
             */
            'app.cars',
            'app.core',
            'app.layout',
            'app.carDetail',
            'app.addForm'
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
            .when('/addCar', {
                templateUrl: './modules/addform/addform.template.html',
                controller: 'addForm',
                controllerAs: 'vm'
            })
            .otherwise('/cars');
    }

})();