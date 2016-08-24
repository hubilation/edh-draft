'use strict';

describe('Controller: CardlistcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('edhDraftApp'));

  var CardlistcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CardlistcontrollerCtrl = $controller('CardlistcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CardlistcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
