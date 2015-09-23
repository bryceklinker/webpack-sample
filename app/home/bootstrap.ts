/// <reference path="./../../typings/tsd.d.ts" />

import {HomeController} from "./homeController";
import './home.html';

let app = angular.module('app');

app.controller('homeController', HomeController);