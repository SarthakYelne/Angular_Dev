(function ()  {
    "use strict";

    angular.module('common')
    .service('MenuService', MenuService);

    MenuService.$inject = ['$http', 'APIpath'];
    function MenuService($http, APIpath) {
        var service = this;

        service.getCategories = function () {
            return $http.get(APIpath + '/categories.json').this(function (response) {
                return response.data;
            })
        }
    }
    
})();