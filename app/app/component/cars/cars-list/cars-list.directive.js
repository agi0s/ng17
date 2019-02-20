(function(){
    angular
        .module('cars')
        .directive('carsList', carsList)

    function carsList () {
        return {
            bindings: {
                query: '<',
            },
            templateUrl: './app/component/cars/car-card/car-card.template.html',
        }
      };
})();