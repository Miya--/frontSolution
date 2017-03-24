/**
 * 整个网站的入口代码
 * 主要用来配置requirejs
 */
(function () {
	var config = {
		baseUrl : '../views',
		paths : {
			angular : 'lib/angular',
			'angular-route' : 'lib/angular-route'
		},
		shim : {
			angular : {
				exports : 'angular'
			},
			'angular-route' : {
				deps : ['angular'], // 依赖什么模块
				exports : 'ngRouteModule'
			}
		}
	};
	
	require.config(config); // 配置模块的名字和路径
	
	// 引入angular和angular-route，手动启动angular
	require([
		'angular', 
		'router', 
		'../components/header/header',
		'../components/footer/footer'
	], function (angular) {
		angular.bootstrap(document, ['myApp']);
		
		//require(['../components/header/header']);
	});
	
})();