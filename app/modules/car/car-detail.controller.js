(function () {
    'use strict';

    angular
        .module('app.carDetail')
        .controller('carDetail', carDetail);

    /* @ngInject */
    function carDetail($routeParams, dataService) {
        var vm = this;
            vm.car = {};

        activate();

        ////////////////

        function activate() {
            getCar($routeParams.id);
        }

        function getCar(id) {
            dataService.getCars().then(
                cars => {
                    cars.data.forEach( function(car){
                        if(+car.id === +id){
                            vm.car = car;
                        }})
                },
                err => alert(err)
            )
        }
    }

})();

