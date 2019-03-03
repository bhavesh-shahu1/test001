(function() {
    'use strict';
    angular.module('app.meal.component').controller('ToolbarController', ToolbarController)
       
    /* @ngInject */
    function ToolbarController($scope, commonService, $mdDialog, $state) {
        var vm = this;
        vm.init = init;
        // vm.openLeftMenu = openLeftMenu;
        // vm.getUserPlayList = getUserPlayList;
        vm.userInfo = commonService.getUserInfo();
        // console.log(vm.userInfo);
        // vm.uploadVideo = uploadVideo;
        // vm.getWaitListVideo = getWaitListVideo;
        // vm.playUserVideo = playUserVideo;
        // vm.addToWaitList = addToWaitList;
        // vm.openRightMenu = openRightMenu;
        // vm.getPlayListHistory = getPlayListHistory;
        // vm.showUserList = showUserList;
        // vm.showUserProfile = showUserProfile;
        vm.logout = logout;
        // vm.openHistory = openHistory;
        // vm.openSocialMedia = openSocialMedia;
        // vm.Timer = null;

        function init() {
            // vm.videoInfo = localStorage.getItem('videoInfo');
            // if (angular.isDefined(localStorage.getItem('videoInfo')) && localStorage.getItem('videoInfo') != null) {
            //     vm.videoInfo = localStorage.getItem('videoInfo');
            //     vm.videoInformation1 = JSON.parse(vm.videoInfo);
            //     vm.videoTitle = vm.videoInformation1.title;
            // }
        }

        // function openSocialMedia(action) {
        //     vm.isSocialMediaButton = action;
        //     if (vm.isSocialMediaButton) {
        //         var screenType = {
        //             screenType: 'socialMedia'
        //         }
        //         var encode = commonService.encodeObject(screenType);
        //         $rootScope.$broadcast('menu-open', encode);
        //     } else {
        //         var screenType = {
        //             screenType: 'waitlistVedio'
        //         }
        //         var encode = commonService.encodeObject(screenType);
        //         $rootScope.$broadcast('menu-open', encode);
        //     }
        // }

        // function openHistory(action) {
        //     vm.isHistoryButton = action;
        //     if (vm.isHistoryButton) {
        //         var screenType = {
        //             screenType: 'history'
        //         }
        //         var encode = commonService.encodeObject(screenType);
        //         $rootScope.$broadcast('menu-open', encode);
        //         // $state.go('default-layout.admin-layout.wait-list-video', {
        //         //     parameter: encode
        //         // });
        //         // $state.go('default-layout.admin-layout.history');
        //     } else {
        //         var screenType = {
        //             screenType: 'waitlistVedio'
        //         }
        //         var encode = commonService.encodeObject(screenType);
        //         $rootScope.$broadcast('menu-open', encode);
        //         // $state.go('default-layout.admin-layout.wait-list-video', {
        //         //     parameter: encode
        //         // });
        //     }
        // }

        // $scope.$on('playUserSelectedVideo', function($event, videoInfo) {
        //     vm.videoInformation = JSON.parse(videoInfo);
        //     vm.videoTitle = vm.videoInformation.title;
        //     // vm.init();
        // });

        function logout() {
            commonService.logout();
            $state.go('authentication.login');
        }

        // function openLeftMenu() {
        //     $mdSidenav('left').toggle();
        // }

        // function openRightMenu() {
        //     $mdSidenav('right').toggle();
        //     vm.getPlayListHistory();
        // }

        // // Get user playlist
        // function getUserPlayList() {
        //     videoService.getData('api', 'userplaylist', vm.userInfo._id, '').
        //     then(function(response) {
        //         vm.playList = response.data;
        //         commonService.showToast(response.message);
        //     })
        // }

        // // Get playlist History
        // function getPlayListHistory() {
        //     videoService.getData('api', 'waitlist', 'history', '').
        //     then(function(response) {
        //         vm.playListHistory = response.data;
        //         commonService.showToast(response.data.message);
        //     })
        // }

        // // Play User video select from left navigation bar
        // // function playUserVideo(videoInfo) {
        // //     vm.videoTitle = videoInfo.title;
        // //     vm.videoInformation = angular.toJson(videoInfo);
        // //     localStorage.setItem('videoInfo', vm.videoInformation);
        // //     $mdSidenav('left').close();
        // //     $rootScope.$broadcast('playUserSelectedVideo', vm.videoInformation);
        // //     $state.go('default-layout.admin-layout.video');
        // // }

        // function showUserList() {
        //     $state.go('default-layout.admin-layout.user');
        // }

        // function showUserProfile() {
        //     var userInfo = {
        //         'userInfo': vm.userInfo
        //     };
        //     var encode = commonService.encodeObject(userInfo);
        //     $state.go('default-layout.admin-layout.profile', {
        //         parameter: encode
        //     });
        //     // $state.go('default-layout.admin-layout.profile');
        // }
        // // Add event show data in left navigation bar
        // $scope.$on('VideoListTab', function($event, message) {
        //     vm.getUserPlayList();
        // });

        // $scope.$on('nextVideoInfo', function($event, nextVideoInfo) {
        //     vm.videoTitle = nextVideoInfo.title;
        // });
        // $scope.$on('bufferVideo', function($event, buffer) {
        //     console.log(buffer);
        //     if (!buffer) {
        //        vm.Timer= $interval(function() {
        //             if (vm.videoInformation && vm.videoInformation.duration && vm.videoInformation.duration > 0)
        //                 vm.videoInformation.duration--;
        //         }, 1000);
        //     }else{
        //         if (angular.isDefined(vm.Timer)) {
        //             $interval.cancel(vm.Timer);
        //         }
        //     }
        // });

        // $scope.$on('noVideoFound', function($event, array) {
        //     vm.videoTitle = null;
        //     vm.playingBy = null;
        //     vm.videoInformation = [];
        // })
        // // Add event to get select vedio Info
        // $scope.$on('playCurrentUserSelectedVideo', function($event, videoInfo) {
        //     if (angular.isDefined(videoInfo)) {
        //         vm.currentvideoInformation = JSON.parse(videoInfo);
        //         vm.playingBy = vm.currentvideoInformation.user.username;
        //     }
        // });

        // // Upload videoTitle
        // // function uploadVideo($event) {
        // //     //  $mdBottomSheet.hide();
        // //     $mdDialog.show({
        // //         controller: 'UploadVideoController',
        // //         controllerAs: 'vm',
        // //         templateUrl: 'app/meal/video/upload-video-dialog.tmpl.html',
        // //         targetEvent: $event
        // //     }).then(function() {
        // //         vm.getUserPlayList();
        // //     })
        // // }

        // // Get WaitList video
        // function getWaitListVideo() {
        //     $state.go('default-layout.admin-layout.wait-list-video');
        // }

        // function addToWaitList(video_id) {
        //     vm.postParameter = {
        //         'video_id': video_id
        //     }
        //     videoService.postData('waitlist', vm.postParameter).then(function(response) {
        //         //Update Waitlist in rigth sidebar
        //         $rootScope.$broadcast('updateWaitList', 'updateWaitList');
        //         commonService.showToast(response.message);
        //     })
        // }

        vm.init();
    }
})();