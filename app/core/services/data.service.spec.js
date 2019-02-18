'use strict';

describe('dataService', function() {
  var dataService;

  beforeEach(module('app.core'));
  beforeEach(inject(function(_dataService_) {
      dataService = _dataService_;
  }));

  it('should fetch the cars data from `/data.json`', function() {
    var cars;

    dataService.getCars()
        .then(_cars_ => cars = _cars_);

    expect(cars).toEqual([]);

  });

});