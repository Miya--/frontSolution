define(['angular', 'router'], function (angular, app) {
	app.directive('header', function () {
		return {
			templateUrl : 'components/header/header.html',
			restrict : 'E'
		};
	});
});




