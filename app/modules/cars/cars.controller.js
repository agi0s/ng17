(function () {
    'use strict';

    angular
        .module('app.cars')
        .controller('CarsController', CarsController);

    /* @ngInject */
    function CarsController(dataService) {
        var vm = this;
            vm.title = 'CarsController';
            vm.cars = [];
            vm.delete = deleteCar;
            vm.add = addCar;

        activate();

        ////////////////

        function activate() {
            getCars();
        }

        function getCars() {
            dataService.getCars().then(
                cars => {
                    vm.cars = cars.data;
                },
                err => alert(err)
            )
        }

        function deleteCar(id) {
            vm.cars = vm.cars.filter( car => car.id !== id );
        }

        function addCar(car) {
            let newCar = car;
            newCar.img ? '' : newCar.image = 'assets/img/no-picture.png';
            newCar.id ? '' : newCar.id = vm.cars.length;
            vm.cars.unshift(car);
            car = "";
        }
    }

})();

