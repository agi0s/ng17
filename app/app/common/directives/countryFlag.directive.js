(function() {
    'use strict';

    angular.module('core')
           .directive("countryFlag", ['dataService', function(dataService){
               return function (scope, element) {

                   dataService.getCountry()
                       .then( countries => {
                           let img = getCountryFlag(countries, scope.car.country);
                           img ? prependFlag(img, element) : '';
                       })
               }
           }])


    function getCountryFlag(list, query) {
        for (let key in list) {
            if (key === query) {
                return list[key];
            }}
    }

    function prependFlag(img, element) {
        var imgElem = angular.element("<img>");
        imgElem[0]['src'] = `assets/flags${img}`;

        element.prepend(imgElem);
    }
})();

