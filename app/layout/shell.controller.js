(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', Shell);

    function Shell() {
        /*jshint validthis: true */
        var vm = this;
        vm.searchQuery = '';

        activate();
    }
})();
