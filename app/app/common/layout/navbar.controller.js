(function () {
    'use strict';

    angular
        .module('core')
        .controller('NavbarController', NavbarController);

    function NavbarController() {
        var vm = this;
        vm.searchQuery = '';
    }
})();

