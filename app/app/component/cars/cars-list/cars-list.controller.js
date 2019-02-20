(function () {
    'use strict';

    angular
        .module('cars')
        .controller('CarsController', ['dataService', '$scope', '$localStorage', CarsController]);

    function CarsController(dataService, $scope, $localStorage) {
        var vm = this;
            vm.title = 'CarsController';
            vm.delete = deleteCar;
            vm.add = addCar;
            $scope.$storage = $localStorage;
        
        let scope = $scope.$storage;

        activate();

        function activate() {
            getCars(scope);
        }

        function getCars(scope) {
            if(!scope.cars){
                dataService.getCars().then(
                    cars => scope.cars = cars.data,
                    err => alert(err)
                )
            }
        }

        function deleteCar(id, scope = $scope.$storage) {
           scope.cars = scope.cars.filter( car => car.id !== id );
        }

        function addCar(car, scope = $scope.$storage) {
            let newCar = car;
            newCar.img ? '' : newCar.image = 'assets/img/no-picture.png';
            newCar.id ? '' : newCar.id = scope.cars.length;
            scope.cars.unshift(newCar);
        }
    }

})();

