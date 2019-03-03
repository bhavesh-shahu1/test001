(function() {
    angular.module('app.meal.common').service('commonService', commonService);
    /* @ngInject */
    function commonService(localStorageService, $base64, toaster, $mdToast) {
        //var userInfo;
        var userPermission;
        var setUserInfo = function(user) {
            userInfo = user;
            localStorageService.set('userInfo', user);
        };

        var getUserInfo = function() {
            userInfo = localStorageService.get('userInfo');
            return userInfo;
        };

        var setUserPermission = function(permission) {
            userPermission = permission;
            localStorageService.set('userPermission', userPermission);
        }

        var getUserPermission = function() {
            userPermission = localStorageService.get('userPermission');
            return userPermission;
        }

        var encodeObject = function(obj) {
            return encodeURIComponent($base64.encode(angular.toJson(obj)));
        };
        var decodeToObject = function(str) {
            return angular.fromJson($base64.decode(decodeURIComponent(str)));
        };

        /**
         * Pass a message to show a Toast
         * message: String
         */
        // var showToast = function(message, position, hideDelay) {
        //     position = position || 'bottom right';
        //     hideDelay = hideDelay || 5000;
        //     $mdToast.show({
        //         template: '<md-toast><span flex translate>' + message + '</span></md-toast>',
        //         position: position,
        //         hideDelay: hideDelay
        //     });
        // };

        /**
         * Pass a message to show a Toast
         * message: String
         * type: success | error | wait | warning | note | info
         * timeout: Hide toaster Time in milliseconds
         */
        var showToast = function(message, type, timeout) {
            console.log(message);
            type = type || 'success';
            timeout = timeout || 50000;
            toaster.pop({
                title: '',
                type:type,
                body: message,
                timeout: timeout
            });
        };

        var logout = function() {
            localStorage.removeItem('videoInfo');
            localStorageService.clearAll();

        };

        return {
            showToast: showToast,
            setUserInfo: setUserInfo,
            getUserInfo: getUserInfo,
            setUserPermission: setUserPermission,
            getUserPermission: getUserPermission,
            logout: logout,
            encodeObject: encodeObject,
            decodeToObject: decodeToObject
        }
    }
})();
