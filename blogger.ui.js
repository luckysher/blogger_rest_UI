(function(){
    'use strict';
        angular
                .module('bloggerui', ['ui.router', 'ngMessages', 'ngStorage'])
                .config(config)
                .run(run);

        function config(['$routeProvider',

            function config($routeProvider) {

                    $routeProvider.
                            when('/blogs', {
                                            template: ''
                                        }).
                         ]);

        function run(){
        };

          
})();
