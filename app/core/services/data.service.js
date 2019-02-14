(function () {
    'use strict';

    angular
        .module('app.core')
        .service('dataService', dataService);

    /* @ngInject */
    function dataService($http) {
        return {
            getCars
        };
        ////////////////

        function getCars() {
            return $http.get('/data.json')
                .then( cars => cars )
                .catch(function(message) {
                    alert(message);
                });
        }
    }

})();

