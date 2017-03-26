/**
 * 整个网站的路由配置
 * 实际部署时 把router.js和main.js进行合并
 */
define(['angular', 'require', 'angular-route'], function (angular, require) {
	var app = angular.module('myApp', ['ngRoute']);
	
	app.config(['$routeProvider', '$controllerProvider', function ($routeProvider, $controllerProvider) {
		$routeProvider.when('/order', {
             templateUrl: 'components/order/order.html',
             controller: 'orderController',
             resolve: { // 路由更改html之前需要处理的事情
                 keyName: function ($q) {
                 	var deferred = $q.defer();
                 	require(['components/order/order.js'], function (controller) {
                    	//由于是动态加载的controller，所以要先注册，再使用
                         $controllerProvider.register('orderController', controller); 
                         deferred.resolve();
                     });
                     return deferred.promise;
                 }
             }
         }).
         when('/home', {
             templateUrl: 'home.html',
             controller: 'homeController',
             resolve: {
                 keyName: function ($q) {
                     var deferred = $q.defer();
                     require(['../components/exception/404/notfound.js'], function (controller) {
                         $controllerProvider.register('notfoundController', controller);      //由于是动态加载的controller，所以要先注册，再使用
                         deferred.resolve();
                     });
                     return deferred.promise;
                 }
             }
         }).
         when('/404', {
             templateUrl: '../components/exception/404/notfound.html',
             controller: 'notfoundController',
             resolve: {
                 keyName: function ($q) {
                     var deferred = $q.defer();
                     require(['../components/exception/404/notfound.js'], function (controller) {
                         $controllerProvider.register('notfoundController', controller);      //由于是动态加载的controller，所以要先注册，再使用
                         deferred.resolve();
                     });
                     return deferred.promise;
                 }
             }
         }).
         otherwise({
             redirectTo: '/404'
         });
	}]);
	
	return app;
});