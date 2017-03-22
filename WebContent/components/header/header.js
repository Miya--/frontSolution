myApp.directive('header', function () {
	return {
		templateUrl : 'components/header/header.html',
		restrict : 'E'
	};
});
console.log(myApp.directive);