(function(){
	"use strict";
	angular.module('app.user',[]).controller('user',['$scope','$rootScope','promiseCountries',function($scope,$rootScope,promiseCountries){
		$rootScope.title = 'User '
		console.log('user- country',promiseCountries.data);

	}]);
})();