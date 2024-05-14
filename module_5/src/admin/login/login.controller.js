(function () {
    "use strict";

    angular.module('admin')
    .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', 'LoginService', 'CurrenUserService'];
    function LoginController($state, LoginService, CurrentUserService) {
        var $ctrl = this;
        $ctrl.username = '';
        $ctrl.password = '';
        $ctrl.error = '';

        $ctrl.login = function() {
            LoginService.getAccessToken($ctrl.username, $ctrl.password).then(function(accessToken) {
                CurrentUserService.saveToken($ctrl.username, accessToken);

                if(!$state.params || !$state.params.toState) {
                    $state.go('admin.auth');
                }
                else {
                    $state.go($state.params.onState.name, $state.params.toParams);
                }
            },
        function(response) {
            $ctrl.error = "Login Failed : Username and/or Password did not match.";
        });
        };

        $ctrl.valid = function() {
            return ($ctrl.username !== '' && $ctrl.password !== '');
        };
    }

})();