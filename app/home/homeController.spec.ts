/// <reference path="./../../typings/tsd.d.ts" />
import {HomeModule} from "./homeModule";

describe('homeController', () => {
	let $scope;
	let createController;
	
	beforeEach(angular.mock.module(HomeModule.name));
	
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
		expect($scope.name).toBe('Bryce');
	});
});