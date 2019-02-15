(function () {
    'use strict';

    angular
        .module('app.core')
        .service('dataService', dataService);

    /* @ngInject */
    function dataService($http) {
        return {
            getCars,
            getCountry
        };
        ////////////////

        function getCars() {
            return $http.get('/data.json')
                .then(cars => cars)
                .catch(function (message) {
                    console.log(message);
                });
        }

        function getCountry() {
            return $http.get('/countries.json')
                .then(countries => countries.data)
                .catch(function (message) {
                    console.log(message);
                });
        }
    }

})();

