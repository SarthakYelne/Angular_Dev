(function() {
    'use strict';
  
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController ($scope) {
  
      $scope.checkLunch = function() {
        var list = $scope.lunch_list;
        // console.log(list);
        // if empty
        if (list == "") {
          $scope.msg = "Please enter data first";
          return;
        }
  
        // if not empty
        var dishes = list.split(',');
        var nDishes = dishes.length;
  
        if (nDishes <= 3) {
          $scope.msg = "Enjoy!";
        }
        else {
          $scope.msg = "Too much!";
        }
  
      }
    }
  
  }
  
  )();