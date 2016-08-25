'use strict';

/**
 * @ngdoc service
 * @name edhDraftApp.cardService
 * @description
 * # cardService
 * Handles everything about getting cards.
 */
angular.module('edhDraftApp')
  .factory('cardService', cardService);

  cardService.$inject = ["$http"];

  function cardService($http) {
    var service = {};

    var rootUrl = "https://api.deckbrew.com/mtg/cards"


    service.data = {
      matchingCards: [],
      selectedCards: []
    };

    service.getCards = function(){
        $http({
          method: "GET",
          url: rootUrl
        }).then(function(response){
          console.log(response);
        })
    };

    service.searchCard = function(searchString){
      $http({
        method: "GET",
        url: rootUrl + "/typeahead?format=commander&q=" + searchString
      }).then(function(response){
        removeDisallowedCards(response.data);
        service.data.matchingCards = response.data;
        console.log(response.data);
      });
    };

    function removeDisallowedCards(cards){

      var indexesToRemove = [];

      for(var i = 0, len = cards.length; i < len; i++){
        if(!isCommanderLegal(cards[i])){
          indexesToRemove.push(i);
        }
      }

      if(indexesToRemove.length > 0){
        var reverseOrder = indexesToRemove.reverse();

        for(var i = 0, len = reverseOrder.length; i < len; i++){
          var indexToRemove = reverseOrder[i];
          cards.splice(indexToRemove, 1);
        }
      }

    }

    function isCommanderLegal(card){
      if(card.formats.commander !== "legal"){
        return false;
      }
      return true;
    };

    function isAlreadyPicked(card){
      return false;
    };

    service.selectCard = function(card){
      service.data.selectedCards.push(card);
    }

    return service;
  };
