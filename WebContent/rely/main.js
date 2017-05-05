/**
 * 整个网站的入口代码
 * 主要用来配置requirejs
 */
(function () {
	var config = {
		paths : {
			// 库文件
			'angular' : 'rely/lib/angular',
			'angular-route' : 'rely/lib/angular-route',
			// js文件
			'router' : 'rely/router'
		},
		// 配置没有采用AMD规范编写的模块
		shim : {
			'angular' : {
				exports : 'angular'
			},
			'angular-route' : {
				deps : ['angular']
			},
			'router' : {
				deps : ['angular', 'angular-route']
			}
		}
	};
	
	require.config(config); // 配置模块的名字和路径
	
	// require函数 第一个参数：表示依赖的模块 第二个参数：回调函数，参数为加载的模块中的对象
	require(['angular', 'router', 'components/header/header', 'components/footer/footer'], function (angular) {
		// 启动angular框架
		angular.bootstrap(document, ['myApp']);
	});
	
})();