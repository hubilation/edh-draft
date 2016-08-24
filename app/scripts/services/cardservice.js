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
        service.data.matchingCards = response.data;
      });
    };

    service.searchCommanderCards = function(searchString){
      $http({
        method: "GET",
        url: rootUrl + "?format=commander&name=" + searchString
      }).then(function(response){
        console.log(response);
        service.data.matchingCards = response.data;
      });
    }


    return service;
  };
