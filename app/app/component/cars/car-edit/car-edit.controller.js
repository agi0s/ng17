(function () {
    'use strict';

    angular
        .module('cars')
        .controller('carEdit', ['$routeParams', '$scope', '$localStorage', '$location', 'dataService', carEdit]);

    function carEdit($routeParams, $scope, $localStorage, $location) {
        var vm = this;
            vm.car = {};
            vm.update = updateCar;
            vm.id = $routeParams.id;
            
            $scope.$storage = $localStorage;

        //get car with $routeProvider.resolve
        activate();

        
        function updateCar(car){
            Object.assign($scope.$storage.cars[vm.id], car);
        }

        function activate() {
            getCar(vm.id, $scope.$storage);
        }

        function getCar(id, scope) {
            vm.car = scope.cars[id];
        }
    }

})();

