define(['angular', 'jquery'], function (angular, $) {
	console.log(angular);
	console.log($);
	var myApp = angular.module('myApp', []);
	myApp.directive('footer', function () {
		return {
			templateUrl : 'footer/footer.html',
			restrict : 'E'
		};
	});
});
