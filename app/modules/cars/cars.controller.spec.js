describe('CarsController', function() {

    beforeEach(module('app.cars'));

    describe('CarsController', inject(function($componentController) {
        var ctrl = $componentController('CarsController');

        it('should create a `cars` model with 31 cars',  () => {
            expect(ctrl.cars.length).toBe(31);
        })
    }));

});
