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
    }

})();

