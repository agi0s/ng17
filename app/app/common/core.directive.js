(function() {
    'use strict';

    angular
        .module('core')
        .directive('appCore', appCore);

    
    function appCore () {
        return {
            templateUrl: './app/common/core.template.html'
        }
    };
})();
