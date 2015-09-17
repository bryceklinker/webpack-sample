/// <reference path="./../../typings/angularjs/angular.d.ts" />
import HomeController = require('./homeController');

const home = angular.module('app.home', []);

home.name = 'app.home';
home.controller('homeController', HomeController);

export = home;