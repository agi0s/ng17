describe('CarsController', function() {

    beforeEach(module('app.cars'));

    describe('CarsController', function () {
        beforeEach(inject(['dataService', '$controller', '$rootScope', function($rootScope,$controller){
            scope = $rootScope.$new();
            controller=$controller('CarsController',{
                '$scope':scope
            });
        }]));

        it('should create a `cars` model with 31 cars',function(){
            expect(scope.cars.length).toBe(31);
        })

        it('controller title',function(){
            expect(scope.title).toBe('CarsController');
        });
    })
});
