(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('apiBasePath', 'https://coursera-jhu-default-rtdb.firebaseio.com/');

  MenuDataService.$inject = ['$http', 'apiBasePath'];
  function MenuDataService ($http, apiBasePath) {
    var service = this;

    service.getAllCategories = function () {
      var result = $http({
        method: 'GET',
        url: (apiBasePath + 'categories.json')
      });

      return result;
    }

    
    service.getItemsForCategory = function (Name) {
      return $http({
        method: 'GET',
        url: (apiBasePath + 'menu_items/'+Name+'.json') 
      });
    }
  }

})();