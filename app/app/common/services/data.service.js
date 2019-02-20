(function() {
    'use strict';

    angular
        .module('core')
        .service('dataService', dataService);

    function dataService($http) {
        return {
            getCars,
            getCountry
        };

        function getCars() {
            return $http.get('/data/data.json')
                .then(cars => cars)
                .catch(function (message) {
                    console.log(message);
                });
        }

        function getCountry() {
            return $http.get('/data/countries.json')
                .then(countries => countries.data)
                .catch(function (message) {
                    console.log(message);
                });
        }
    }
})();

