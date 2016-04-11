import * as angular from 'angular';
export let $anchorScroll = undefined;
export let $cacheFactory = undefined;
export let $compile = undefined;
export let $controller = undefined;
export let $document = undefined;
export let $exceptionHandler = undefined;
export let $filter = undefined;
export let $http = undefined;
export let $httpBackend = undefined;
export let $httpParamSerializer = undefined;
export let $httpParamSerializerJQLike = undefined;
export let $injector = undefined;
export let $interpolate = undefined;
export let $interval = undefined;
export let $locale = undefined;
export let $location = undefined;
export let $log = undefined;
export let $parse = undefined;
export let $q = undefined;
export let $rootElement = undefined;
export let $rootScope = undefined;
export let $sce = undefined;
export let $sceDelegate = undefined;
export let $templateCache = undefined;
export let $templateRequest = undefined;
export let $timeout = undefined;
export let $window = undefined;
export let $xhrFactory = undefined;
// bootstrap a dummy application using our module, so the #run block
// below is synchronously called, and all of the injectables in it are
// guaranteed to be defined after this code is run.
// TODO: move this out into a separate module
// TODO: tests
export function bootstrap(moduleName) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    angular.bootstrap(div, [moduleName]);
    document.body.removeChild(div);
}
// TODO: add mgMock/ngMockE2E services
angular.module('bcherny/ngimport', []).run(['$injector', function ($i) {
        $anchorScroll = $i.get('$anchorScroll');
        $cacheFactory = $i.get('$cacheFactory');
        $compile = $i.get('$compile');
        $controller = $i.get('$controller');
        $document = $i.get('$document');
        $exceptionHandler = $i.get('$exceptionHandler');
        $filter = $i.get('$filter');
        $http = $i.get('$http');
        $httpBackend = $i.get('$httpBackend');
        $httpParamSerializer = $i.get('$httpParamSerializer');
        $httpParamSerializerJQLike = $i.get('$httpParamSerializerJQLike');
        $injector = $i;
        $interpolate = $i.get('$interpolate');
        $interval = $i.get('$interval');
        $locale = $i.get('$locale');
        $location = $i.get('$location');
        $log = $i.get('$log');
        $parse = $i.get('$parse');
        $q = $i.get('$q');
        $rootElement = $i.get('$rootElement');
        $rootScope = $i.get('$rootScope');
        $sce = $i.get('$sce');
        $sceDelegate = $i.get('$sceDelegate');
        $templateCache = $i.get('$templateCache');
        $templateRequest = $i.get('$templateRequest');
        $timeout = $i.get('$timeout');
        $window = $i.get('$window');
        $xhrFactory = $i.get('$xhrFactory');
    }]);
bootstrap('bcherny/ngimport');
