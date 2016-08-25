'use strict';

/**
 * @ngdoc function
 * @name edhDraftApp.controller:CardlistcontrollerCtrl
 * @description
 * # CardlistcontrollerCtrl
 * Controller of the edhDraftApp
 */
angular.module('edhDraftApp')
  .controller('ManaCostController', ManaCostController);

ManaCostController.$inject = ["$scope"];

function ManaCostController ($scope) {
    var vm = this;
    var regex = /\{(.*?)\}/g;

    vm.className = "";

    vm.classes = [];

    function activate(){
        var cmc = $scope.cmc;

        var arrayOfCosts = [];

        var match = regex.exec(cmc);
        while(match != null){
            arrayOfCosts.push(match[0]);
            match = regex.exec(cmc);
        }

        var classNamePrefix = "ms ms-";
        var classNameSuffix = " ms-cost ms-shadow";

        for(var i = 0, len = arrayOfCosts.length; i < len; i++){
            var sanitized = arrayOfCosts[i].replace(/[\/\{\}]/g, "").toLowerCase();

            if(sanitized.length == 2 && sanitized.indexOf("p") == -1){
                sanitized += " ms-split";
            }

            vm.classes.push(classNamePrefix + sanitized + classNameSuffix);
        }

    };

    activate();
  };