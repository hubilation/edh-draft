'use strict';

/**
 * @ngdoc directive
 * @name edhDraftApp.directive:manaCost
 * @description
 * # manaCost
 */
angular.module('edhDraftApp')
  .directive('manaCost', manaCost);

  function manaCost () {
    return {
      templateUrl: '/scripts/directives/manaCost/manaCost.html',
      restrict: 'E',
      controller: "ManaCostController",
      controllerAs: "vm",
      scope:{
          cmc: "@"
      }
    };
  }
