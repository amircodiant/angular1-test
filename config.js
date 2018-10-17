(function(){
	'use strict'
	angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
		console.log('config')
		$urlRouterProvider.when('', '/')
		$stateProvider.state('root', {
			url:'/',
			views: {
                'header': {
                    templateUrl: 'module/common/view/header.html'
                },
                'menu': {
                    templateUrl: 'module/common/view/menu.html',
                },
                'content': {
                    template: '<h1>Root Content</h1>',
                    controller: function ($scope,$rootScope){
				  		$rootScope.title = 'Home'
				  	}
                }
            }
		})

		/*$stateProvider.state('contact', {
			url:'/contact',

			views: {
                'header': {
                    templateUrl: 'module/common/view/header.html'
                },
                'menu': {
                    templateUrl: 'module/common/view/menu.html',
                },
                'content': {
                    template: '<h1>Contact Content</h1>',
				  	controller: function ($scope,$rootScope){
				  		$rootScope.title = 'Contact'
				  	}
                }
            }

		  	
		})*/
		
		$stateProvider.state('user', {
			url:'/user',
			resolve: { 
		        promiseCountries:  function($http){
		            // $http returns a promise for the url data
		            return $http({method: 'POST', url: 'http://localhost:80/careclix/api/web/index.php/v1/list/country'});
		         }, 
			},
			views: {
				
                'header': {
                    templateUrl: 'module/common/view/header.html'
                },
                'menu': {
                    templateUrl: 'module/common/view/menu.html',
                },
                'content': {
                    templateUrl: 'module/user/view/dashboard.html',
		  			controller: 'user'
                },


            }
		  	
		})

		$stateProvider.state('user.patient', {
			url:'/patient',
			views: {                
                'content': {
                    templateUrl: 'module/user/view/dashboard.html',
		  			controller: 'user'
                }
            }
		  	
		})

		/*$stateProvider.state('user.patient.detail', {
			url:'/detail',
			views: {
                'header': {
                    templateUrl: 'module/common/view/header.html'
                },
                'menu': {
                    templateUrl: 'module/common/view/menu.html',
                },
                'content': {
                    templateUrl: 'module/user/view/dashboard.html',
		  			controller: 'user'
                }
            }
		  	
		})     */    
		
		$stateProvider.state("enter", {
			url:'/enter',
			resolve: { 
				title: function () { 
					return 'Enter' 
				},
				simpleObj:  function(){
					console.log('reslove - simpleObj')
		            return {value: 'simple!'}
		        },
		        promiseCountries:  function($http){
		            // $http returns a promise for the url data
		            return $http({method: 'POST', url: 'http://localhost:80/careclix/api/web/index.php/v1/list/country'});
		         }, 
			},
			views: {
                'header': {
                    templateUrl: 'module/common/view/header.html'
                },
                'menu': {
                    templateUrl: 'module/common/view/menu.html',
                },
                'content': {
                    template: '<h1>{{title}}</h1>',
		  			controller: function($scope, title, simpleObj,promiseCountries){
		  				console.log('cntl - simpleObj')
		  				console.log('countries',promiseCountries)
						$scope.title = title +' ' +simpleObj.value
					}
                }
            },
			onEnter: function(title){
				if(title){ console.log('onEnter',title) }
			},
			onExit: function(title){
				if(title){ console.log('onExit',title) }
			}
		})

		/*$stateProvider.state('enter.child', {
			url:'/child',

			views: {
                'header': {
                    templateUrl: 'module/common/view/header.html'
                },
                'menu': {
                    templateUrl: 'module/common/view/menu.html',
                },
                'content': {
                    template: '<h1>Child</h1>',
				  	controller: function ($scope,$rootScope){
				  		$rootScope.title = 'Contact'
				  	}
                }
            }

		  	
		})*/

		/*$stateProvider.state('dataState', {
			url:'/data-state',

			views: {
                'header': {
                    templateUrl: 'module/common/view/header.html'
                },
                'menu': {
                    templateUrl: 'module/common/view/menu.html',
                },
                'content': {
                    template: '<h1>Contact Content</h1>',
				  	controller: function ($scope,$rootScope,$state){
				  		$rootScope.title = 'Data state : ' + $state.current.data.custom
				  	}
                }
            },
            data:{
            	custom:'custom value'
            }

		  	
		})*/


		/*$stateProvider.state('test001', {
	        abstract: true,
	        url: '/test001',
	        templateUrl: 'module/test001/views/test001.html',
	        controller: function($scope){
	            $scope.contacts = [{ id:0, name: "Alice" }, { id:1, name: "Bob" }];
	            console.log($scope.contacts)
	        }    		
		})
		.state('test001.list', {
	        url: '/list',
	        templateUrl: 'module/test001/views/test001.list.html'
	    })
	    .state('test001.detail', {
	        url: '/:id',
	        templateUrl: 'module/test001/views/test001.details.html',
	        controller: function($scope, $stateParams){
	          $scope.person = $scope.contacts[$stateParams.id];
	        }
	    })*/

        

	}])
	.run(['$rootScope', '$transitions',function($rootScope, $transitions){
		console.log('run')
		
		$transitions.onStart({ }, function(trans) {
		    console.log('start');
	  	});

	  	$transitions.onStart({ }, function(trans) {
		    console.log('end');
	  	});


	}])
})()