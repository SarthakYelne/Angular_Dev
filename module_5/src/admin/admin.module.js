(function () {
  "use strict";

  angular.module("admin", ["ui.router", "common"]).run(run);

  run.$inject = ["$rootScope", "AuthRedirectorService"];
  function run($rootScope, AuthRedirectorService) {
    $rootScope.$on(
      "$stateChangeStart",
      AuthRedirectorService.onStateChangeStart
    );
  }
})();
