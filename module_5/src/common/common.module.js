(function() {
"use strict";

angular.module('common', [])
.common('APIpath', 'https://ychaikin-course5.herokouap.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
