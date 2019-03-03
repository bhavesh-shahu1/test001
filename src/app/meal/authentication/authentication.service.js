(function(){
	angular
	.module('app.meal.authentication')
	.factory('authenticationService',authenticationService);

	/* @ngInject */
	function authenticationService(Restangular,$log){
       
		var getData = function(action, id, action2, id2, flag, isPercentage, page, limit, sort_order, sort_by) {
            var queryParams = {
                page: page,
                limit: limit,
                sort_order: sort_order,
                sort_by: sort_by,
                flag: flag,
                is_percentage: isPercentage
            };

            if (action != null && id != null && action2 != null && id2 != null) {
                return Restangular.one(action, id)
                    .one(action2, id2)
                    .get(queryParams)
                    .then(function(response) {
                        return response;
                    }, handleError);
            } else if (action != null && id != null && action2 != null && id2 == null) {
                return Restangular.one(action, id)
                    .one(action2)
                    .get(queryParams)
                    .then(function(response) {
                        return response;
                    }, handleError);

            } else if (action != null && id != null && action2 == null && id2 == null) {
                return Restangular.one(action, id)
                    .get(queryParams)
                    .then(function(response) {
                        return response;
                    }, handleError);
            } else if (action != null && id == null && action2 == null && id2 == null) {
                return Restangular.one(action)
                    .get(queryParams)
                    .then(function(response) {
                        return response;
                    }, handleError);
            } else if (action == null && id == null && action2 == null && id2 == null) {
                return Restangular.get(queryParams)
                    .then(function(response) {
                        return response;
                    }, handleError);
            } else {
                return Restangular.one(action, id)
                    .one(action2, id2)
                    .get(queryParams)
                    .then(function(response) {
                        return response;
                    }, handleError);

            }
        };

        /**
         * Post the data based on parameter
         * @param  {Integer} organizationId DB Id of Organization
         * @param {String}  action  action name
         * @param {Integer} Id      action id    
         * @return {Json}           Data
         */
        var postData = function(action, id, action1, id1, action2, id2, action3, id3, postParams) {
            if (action != null && id != null && action1 != null && id1 != null && action2 != null && id2 != null && action3 != null && id3 != null) {
                return Restangular
                    .one(action, id)
                    .one(action1, id1)
                    .one(action2, id2)
                    .one(action3, id3)
                    .customPOST(postParams)
                    .then(function(response) {
                        return response;
                    }, handleError);
            } else if (action != null && id != null && action1 != null && id1 != null && action2 != null && id2 != null && action3 != null) {
                return Restangular
                    .one(action, id)
                    .one(action1, id1)
                    .one(action2, id2)
                    .one(action3, id3)
                    .customPOST(postParams)
                    .then(function(response) {
                        return response;
                    }, handleError);
            } else if (action != null && id != null && action1 != null && id1 != null && action2 != null && id2 != null) {
                return Restangular
                    .one(action, id)
                    .one(action1, id1)
                    .one(action2, id2)
                    .customPOST(postParams)
                    .then(function(response) {
                        return response;
                    }, handleError);
            } else if (action != null && id != null && action1 != null && id1 != null && action2 != null && id2 == null) {
                return Restangular
                    .one(action, id)
                    .one(action1, id1)
                    .one(action2)
                    .customPOST(postParams)
                    .then(function(response) {
                        return response;
                    }, handleError);
            } else if (action != null && id != null && action1 != null && id1 != null) {
                return Restangular
                    .one(action, id)
                    .one(action1, id1)
                    .customPOST(postParams)
                    .then(function(response) {
                        return response;
                    }, handleError);
            } else if (action != null && id != null && action1 != null && id1 == null) {
                return Restangular
                    .one(action, id)
                    .one(action1)
                    .customPOST(postParams)
                    .then(function(response) {
                        return response;
                    }, handleError);
            } else if (action != null && id != null) {
                return Restangular
                    .one(action, id)
                    .customPOST(postParams)
                    .then(function(response) {
                        return response;
                    }, handleError);
            } else if (action != null && id == null) {
                return Restangular
                    .one(action)
                    .customPOST(postParams)
                    .then(function(response) {
                        return response;
                    }, handleError);
            } else {
                return Restangular
                    .customPOST(postParams)
                    .then(function(response) {
                        return response;
                    }, handleError);
            }
        };



        function handleError(response) {
            $log.log(response);
        }

        return{
            getData : getData,
            postData : postData
        }
	}
})();