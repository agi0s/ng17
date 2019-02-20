(function() {
    'use strict';

    angular
        .module('core')
        .directive('navBar', navBar);

    
    function navBar () {
        return {
            templateUrl: './app/common/layout/navbar.template.html'
        }
    };
})();
