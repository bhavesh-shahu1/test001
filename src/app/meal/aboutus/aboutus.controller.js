(function() {
    'use strict';
    angular.module('app.meal.aboutus').controller('AboutUsController', AboutUsController);
    /* @ngInject */
    function AboutUsController(commonService, $state, $mdDialog) {
        var vm = this;
        vm.data = {};
        vm.userInfo = commonService.getUserInfo();
        vm.init = init;

        function init() {
        }
        vm.init();
    }
})();
