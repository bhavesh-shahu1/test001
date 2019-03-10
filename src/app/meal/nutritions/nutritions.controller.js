(function() {
    'use strict';
    angular.module('app.meal.nutritions').controller('NutritionsController', NutritionsController);
    /* @ngInject */
    function NutritionsController(commonService, $state, $mdDialog) {
        var vm = this;
        vm.data = {};
        vm.userInfo = commonService.getUserInfo();
        vm.init = init;

        function init() {
        }
        vm.init();
    }
})();
