(function () {
    'use strict';

    angular
        .module('cars')
        .controller('carDetail', ['$routeParams', '$scope', '$localStorage', '$location', carDetail]);

    function carDetail($routeParams, $scope, $localStorage, $location) {
        var vm = this;
            vm.car = {};
            vm.id = $routeParams.id;
            
            $scope.$storage = $localStorage;

        activate();

        function activate() {
            getCar(vm.id, $scope.$storage);
        }

        function getCar(id, scope) {
            vm.car = scope.cars[id];
        }
    }

})();

