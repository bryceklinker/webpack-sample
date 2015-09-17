/// <reference path="./../typings/angularjs/angular.d.ts" />
import Home = require('./home/home');
export const App = angular.module('app', [Home.name]);