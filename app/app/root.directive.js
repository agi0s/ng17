(function() {
    'use strict';

    angular
      .module('root')
      .directive('root', root);

    function root () {
      return {
        templateUrl: './app/root.template.html'
    }};
})();