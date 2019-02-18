(function () {
    'use strict';

    angular
        .module('app.addForm')
        .controller('addForm', addForm);

    /* @ngInject */
    function addForm() {
        var vm = this;
            vm.car = {};
            vm.save = saveCar;

        function saveCar(form){
            console.log(form);
        }

        activate();

        function activate() {
        }
    }

})();

