(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', Shell);

    function Shell($timeout) {
        /*jshint validthis: true */
        var vm = this;
        vm.searchQuery = '';

        activate();

        function activate() {
            hideSplash();
        }

        function hideSplash() {
            //Force a 1 second delay so we can see the splash.
            $timeout(function() {
                vm.showSplash = false;
            }, 1000);
        }
    }
})();
