(function() {
    'use strict';
    angular.module('app.meal.component').controller('RightMenuController', RightMenuController);
    /* @ngInject */
    function RightMenuController($mdBottomSheet, $rootScope, $mdSidenav, $scope, $state, commonService, homeService) {
        var vm = this;
        vm.init = init;
        vm.referFriend = referFriend;

        function init() {

        }

        function referFriend(isSubmit) {
            console.log(isSubmit);
            if (isSubmit) {
                var postParam = vm.data
                console.log(postParam);
                homeService.postData('sendreferinvite', '', null, null, null, null, postParam)
                    .then(function(response) {
                        // commonService.showToast(response.message);
                        // commonService.showToast(response.message, 'info');
                        commonService.showToast('test----', 'info');
                        console.log(response);
                    })
            }
        }




        // vm.init();

    }
})();