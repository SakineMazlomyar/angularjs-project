let app = angular.module('app', ['ngRoute']);

	app.config(['$routeProvider', ($routeProvider)=> {
		
		$routeProvider
			.when('/', {
				templateUrl: 'index.html',
				controller: 'ProductCtr'
			})
			.when('/products',{
				templateUrl: 'test.html',
				controller: 'ProductCtr'
			})
			
		}]);