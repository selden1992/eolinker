(function() {
    'use strict';

    angular
        .module('eolinker')
        /* 核心配置 */
        .config(coreConfig);

    coreConfig.$inject = ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide'];
    
    function coreConfig($controllerProvider, $compileProvider, $filterProvider, $provide){
      
      var core = angular.module('eolinker');
      // registering components after bootstrap
      core.controller = $controllerProvider.register;
      core.directive  = $compileProvider.directive;
      core.filter     = $filterProvider.register;
      core.factory    = $provide.factory;
      core.service    = $provide.service;
      core.constant   = $provide.constant;
      core.value      = $provide.value;

    }

})();