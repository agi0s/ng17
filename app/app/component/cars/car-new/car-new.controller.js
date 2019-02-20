(function () {
    'use strict';

    angular
        .module('cars')
        .controller('addForm', ['$scope', '$localStorage', '$location', addForm]);

    function addForm($scope, $localStorage, $location) {
        var vm = this;
            vm.car = {};
            vm.save = addCar;
            $scope.$storage = $localStorage;
    
        //move addCar to service
        function addCar(car, scope = $scope.$storage) {
            let newCar = car;
            newCar.img ? '' : newCar.image = 'assets/img/no-picture.png';
            newCar.id ? '' : newCar.id = scope.cars.length;
            scope.cars.push(newCar);
            //add promise or eventemitter
            $location.path('/cars');
        }   
    }

})();

