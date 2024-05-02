(function() {
'use strict';

angular.module('common', [])
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
    $httpProvider.loadingIntercepters.push('loadingHttpIntercepter');
}

})();
