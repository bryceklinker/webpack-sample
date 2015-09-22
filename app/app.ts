/// <reference path="./../typings/tsd.d.ts" />
import {HomeModule} from "./home/homeModule";

const App = angular.module('app', [HomeModule.name]);

export {App};