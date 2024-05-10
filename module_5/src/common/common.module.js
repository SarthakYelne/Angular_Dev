(function() {
  "use strict";

  // https://coursera-jhu-default-rtdb.firebaseio.com  || Course API
  // https://fluff-cafe-default-rtdb.firebaseio.com  || My API

  angular.module('common', [])
  .constant('ApiPath', 'https://fluff-cafe-default-rtdb.firebaseio.com')
  .config(config);
  
  config.$inject = ['$httpProvider'];
  function config($httpProvider) {
    $httpProvider.interceptors.push('loadingHttpInterceptor');
  }
  
  })();