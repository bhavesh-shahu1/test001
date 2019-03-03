(function() {
    'use strict';
    angular.module('app.meal.component').controller('LeftMenuController', LeftMenuController);
    /* @ngInject */
    function LeftMenuController($uibModal, $mdDialog) {
        var vm = this;
        vm.init = init;
        vm.createHelpRequest = createHelpRequest;

        function init() {

        }


        function createHelpRequest($event) {
            $mdDialog.show({
                controller: 'CreateHelpRequestDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/meal/home/create-help-request-dialog.tmpl.html',
                locals: {},
                targetEvent: $event
            }).then(function() {
                // vm.getSectionListByTabId();
            });
        }

        // function createHelpRequest(value) {
        //               var modalInstance = $uibModal.open({
        //                   animation : true,
        //                   ariaLabelledBy: 'modal-title',
        //                   ariaDescribedBy: 'modal-body',
        //                   templateUrl: 'app/meal/home/create-help-request-dialog.tmpl.html',
        //                   controller: 'CreateHelpRequestDialogController',
        //                   controllerAs: 'vm',
        //                   backdrop: 'static',
        //                   size: 'lg',
        //                   resolve: {
        //                       locals: {
        //                       }
        //                   }
        //               });
        //               modalInstance.result.then(function(response) {
        //                   // vm.getList();
        //               }, function() {
        //                   //Modal Dismiss  
        //               });
        //           }

    }
})();