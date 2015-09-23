/// <reference path="./../../typings/tsd.d.ts" />

export class HomeController {
	static $inject = ['$scope'];
	
	constructor($scope: any){
		$scope.name = 'Bryce';
	}
}