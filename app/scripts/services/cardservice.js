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
      matchingCards: []
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
      });
    };

    function removeDisallowedCards(cards){
      for(var i = 0, len = cards.length; i < len; i++){
        if(!isCommanderLegal(cards[i])){
          cards.splice(i, 1);
        }
      }
    }

    function isCommanderLegal(card){
      if(card.formats.commander !== "legal"){
        return false;
      }
      return true;
    }

    function isAlreadyPicked(card){
      return false;
    }

    return service;
  };
