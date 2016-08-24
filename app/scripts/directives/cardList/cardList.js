'use strict';

/**
 * @ngdoc directive
 * @name edhDraftApp.directive:cardList
 * @description
 * # cardList
 */
angular.module('edhDraftApp')
  .directive('cardList', cardList);

  function cardList () {
    return {
      templateUrl: '/scripts/directives/cardList/cardList.html',
      restrict: 'E',
      controller: "CardListController",
      controllerAs: "vm"
    };
  }
