(function() {
    'use strict';
    angular.module('app.meal.home').controller('HomeController', HomeController);
    /* @ngInject */
    function HomeController(homeService, commonService, $state, $mdDialog) {
        var vm = this;
        vm.data = {};
        vm.userInfo = commonService.getUserInfo();
        vm.init = init;
        // vm.createHelpRequest = createHelpRequest;
        // vm.getPostedData = getPostedData;

        function init() {
            // vm.getPostedData();
        }   
        
        // function createHelpRequest($event) {
        //     $mdDialog.show({
        //         controller: 'CreateHelpRequestDialogController',
        //         controllerAs: 'vm',
        //         templateUrl: 'app/meal/home/create-help-request-dialog.tmpl.html',
        //         locals: {},
        //         targetEvent: $event
        //     }).then(function() {
        //         // vm.getSectionListByTabId();
        //     });
        // }

        // Get history
        // function getPostedData(){
        //     vm.activated = true;
        //     homeService.getData('searchposts', '').
        //     then(function(response) {
        //         console.log(response.data);
        //         // vm.activated = false;
        //         // vm.historyResponse = response.data;
        //         // commonService.showToast(response.message);
        //     })
        // }
        


        vm.init();
    }
})();
