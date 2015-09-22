/// <reference path="./../../typings/tsd.d.ts" />

import {HomeController} from "./homeController";

const HomeModule = angular.module('app.home', []);
HomeModule.name = 'app.home';

HomeModule.controller('homeController', HomeController);

export {HomeModule};