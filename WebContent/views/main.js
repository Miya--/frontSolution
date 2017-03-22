/**
 * 整个网页的入口代码
 */
// config 配置模块的名字和路径
require.config({
	path : {
		"angular" : "views/lib/angular",
		"header" : "components/header/header"
	}
});
require(['angular', 'header'], function () {
	var myApp = angular.module('myApp', []);
	console.log('all JS load finished!');
});