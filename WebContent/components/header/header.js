define(['angular', 'router'], function (angular, app) {
	app.directive('header', function () {
		return {
			restrict : 'E',
			templateUrl : 'components/header/header.html'
		};
	});
});




