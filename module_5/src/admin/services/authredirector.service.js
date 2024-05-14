(function () {
  "use strict";

  angular
    .module("admin")
    .service("AuthRedirectorService", AuthRedirectorService);

  AuthRedirectorService.$inject = ["$state", "CurrentUserService"];
  function AuthRedirectorService($state, CurrentUserService) {
    var service = this;

    service.onStateChangeStart = function (
      event,
      toState,
      toParams,
      fromState,
      fromParams
    ) {
      if (
        toState.name.indexOf("admin.") === 0 &&
        toState.name != "admin.login" &&
        !CurrentUserService.isAuthenticated()
      ) {
        event.preventDefault();
        $state.go("admin.login", {
          toState: toState,
          toParams: toParams,
        });
      }
    };
  }
})();
