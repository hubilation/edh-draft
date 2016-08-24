'use strict';

/**
 * @ngdoc function
 * @name edhDraftApp.controller:CardlistcontrollerCtrl
 * @description
 * # CardlistcontrollerCtrl
 * Controller of the edhDraftApp
 */
angular.module('edhDraftApp')
  .controller('CardListController', CardListController);

CardListController.$inject = ["cardService"];

function CardListController (cardService) {
    function activate(){
      cardService.getCards();
    };

    var vm = this;

    vm.cardService = cardService;

    vm.data = {
      searchString: ""
    };

    vm.updateSearch = function(){
      cardService.searchCommanderCards(vm.data.searchString);
    }

    activate();
  };