(function(){
    angular
        .module('cars')
        .directive('carCard', carCard)

    function carCard () {
        return {
            bindings: {
                car: '<',
            },
            templateUrl: './app/component/cars/car-card/car-card.template.html',
        }
      };
})();