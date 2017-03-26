define(['angular', 'router'], function (angular, app) {
	app.directive('footer', function () {
		return {
			templateUrl : 'components/footer/footer.html',
			restrict : 'E'
		};
	});
});
