'use strict';

describe('Service: cardService', function () {

  // load the service's module
  beforeEach(module('edhDraftApp'));

  // instantiate service
  var cardService;
  beforeEach(inject(function (_cardService_) {
    cardService = _cardService_;
  }));

  it('should do something', function () {
    expect(!!cardService).toBe(true);
  });

});
