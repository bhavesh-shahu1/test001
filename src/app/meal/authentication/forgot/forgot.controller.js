(function() {
    'use strict';

    angular
        .module('app.meal.authentication')
        .controller('ForgotController', ForgotController);

    /* @ngInject */
    function ForgotController($scope, $state, $mdToast, $filter, $http, authenticationService, commonService) {
        var vm = this;
        vm.init = init;
        vm.resetClick = resetClick;
        vm.gotoLogin = gotoLogin;

        function init() {

        }

        function resetClick() {
            var postParam = vm.user
            console.log(postParam);
            authenticationService.postData('password', '', 'email', '', null, null, null, null, postParam)
                .then(function(response) {
                    commonService.showToast(response.message);
                    if (response.status == '200') {
                        $state.go('authentication.login');
                    }
                })
        }

        function gotoLogin() {
            $state.go('authentication.login');
        }

    }


})();