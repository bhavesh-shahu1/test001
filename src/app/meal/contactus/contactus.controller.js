(function() {
    'use strict';
    angular.module('app.meal.contactus').controller('ContactUsController', ContactUsController);
    /* @ngInject */
    function ContactUsController(commonService, $state, $mdDialog) {
        var vm = this;
        vm.data = {};
        vm.userInfo = commonService.getUserInfo();
        vm.init = init;

        function init() {
        }
        vm.init();
    }
})();
