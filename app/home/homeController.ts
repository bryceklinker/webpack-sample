/// <reference path="./../../typings/tsd.d.ts" />

class HomeController {
	static $inject = ['$scope'];
	
	constructor($scope: any){
		$scope.name = 'Bryce';
	}
}

export {HomeController};