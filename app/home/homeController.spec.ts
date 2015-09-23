/// <reference path="./../../typings/tsd.d.ts" />
describe('homeController', () => {
	let $scope;
	let createController;

	beforeEach(angular.mock.module('app'));

	beforeEach(angular.mock.inject(($controller: angular.IControllerService, $rootScope: angular.IRootScopeService) => {
		$scope = $rootScope.$new();
		createController = () => {
			return $controller('homeController', {
				$scope: $scope
			});
		};
	}));

	it('should have controller', () => {
		expect(createController()).toBeDefined();
	});

	it('should set name', () => {
		createController();
		expect($scope.name).toBe('Bryce');
	});
});