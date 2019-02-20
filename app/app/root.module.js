(function () {
    'use strict';

    angular
        .module('root', [
            'ngRoute',
            'ngStorage',
            /**/
            'core',
            'components'
        ])
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/app', {
                templateUrl: './app/common/core.template.html',
            })
            .when('/cars', {
                templateUrl: './app/component/cars/cars-list/cars-list.template.html',
            })
            .when('/car/:id', {
                templateUrl: './app/component/cars/car-detail/car-detail.template.html',
            })
            .when('/cars/new', {
                templateUrl: './app/component/cars/car-new/car-new.template.html'
            })
            .when('/cars/edit/:id', {
                templateUrl: './app/component/cars/car-edit/car-edit.template.html'
            })
            .otherwise('/app');
    }

})();