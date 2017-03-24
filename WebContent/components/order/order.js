define(['angular'], function (angular) {
	return function ($scope) {
		var orderJson = [{
			name : '【新风尚价】香港直邮 日本Fancl/芳珂 卸妆油 无添加 温和纳米卸妆油120ml',
			count : '2',
			price : '223',
			status : '已付款',
			time : '2017-03-23'
		},
		{
			name : '【新风尚价】香港直邮 日本 KATE/凯朵 高显色滋润心动唇膏 口红 3.4g',
			count : '1',
			price : '85',
			status : '已付款',
			time : '2017-03-19'
		},
		{
			name : '洋先生 X-RATED冰粉红利口酒 x冰粉红预调酒 鸡尾酒预调酒 女性酒',
			count : '1',
			price : '99',
			status : '已付款',
			time : '2017-03-16'
		},
		{
			name : '嘉士厨奶锅不粘锅加厚单柄热奶锅辅食锅泡面锅带锅盖电磁炉通用',
			count : '1',
			price : '56',
			status : '已付款',
			time : '2017-02-23'
		},
		{
			name : '美国代购 MAC/魅可Nutcracker Sweet胡桃夹子系列刷具套装 16圣诞',
			count : '1',
			price : '336',
			status : '已付款',
			time : '2017-01-01'
		}];
		
		$scope.orderList = orderJson
	};
});

