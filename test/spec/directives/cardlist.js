'use strict';

describe('Directive: cardList', function () {

  // load the directive's module
  beforeEach(module('edhDraftApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<card-list></card-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cardList directive');
  }));
});
