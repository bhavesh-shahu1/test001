(function() {
    'use strict';

    angular
        .module('app.meal.home')
        .controller('CreateHelpRequestDialogController', CreateHelpRequestDialogController);

    /* @ngInject */
    function CreateHelpRequestDialogController(homeService, locals, Upload, $mdDialog, commonService, toaster) {
        var vm = this;
        vm.init = init;
        vm.okClick = okClick;
        vm.cancelClick = cancelClick;
        vm.createHelpRequest = createHelpRequest;
        vm.getCategory = getCategory;
        vm.getSubCategory = getSubCategory;
        vm.options = {};
        vm.data = {};
        // vm.uploadPic = uploadPic;    

        function init() {
            // commonService.showToast('test----', 'info');
            vm.getCategory();
        }

        function getCategory() {
            homeService.getData('getcategories')
                .then(function(response) {
                    vm.options.category = response.data;
                    // commonService.showToast(response.message);
                    console.log(response);
                })
        }

        function getSubCategory(){
            var postParam = {
                cat_id : vm.data.cat_id
            }
            homeService.postData('getsubcatoncat','',null,null,null,null,postParam)
                .then(function(response) {
                    vm.options.subCategory = response.data.sub_categories;
                    console.log(response);
                })

        }

        function createHelpRequest(isSubmit) {
            console.log(isSubmit);
            if (isSubmit) {
                var postParam = vm.data
                console.log(postParam);
                homeService.postData('storehelppost', '', null, null, null, null, postParam)
                    .then(function(response) {
                        // commonService.showToast(response.message);
                        // commonService.showToast(response.message, 'info');
                        commonService.showToast('test----', 'info');
                        console.log(response);
                    })
            }
        }

        // Upload Picture
        // function uploadPic(file) {
        //     vm.activated = true;
        //     if (file) {
        //         Upload.upload({
        //             url: 'https://video-playlist.herokuapp.com/api/user_profile_image/' + vm.userInfo._id,
        //             // headers : {'mimeType': 'multipart/form-data','crossDomain':true,'contentType':false},
        //             data: { avtar: file },
        //         }).then(function(response) {
        //             vm.activated = false;
        //             if (angular.isDefined(response.data.filename)) {
        //                 vm.data.help_post_image = 'https://video-playlist.herokuapp.com/images/user_avtar/' + response.data.filename;
        //             }
        //         });
        //     }
        //     // } else {
        //     //     commonService.showToast(errFiles[0].name + ' File too large: ' + 'max size 2MB', 'bottom right');
        //     // }
        // };

        function okClick() {
            $mdDialog.hide();
        }

        function cancelClick() {
            $mdDialog.cancel();
        }

        vm.init();



    }
})();