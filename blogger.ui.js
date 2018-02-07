(function(){
    'use strict';
        angular
                .module('bloggerui', ['ui.router', 'ngMessages', 'ngStorage'])
                .config(config)
                .run(run);

        function config(['$routeProvider', function config($routeProvider) {

                    $routeProvider.
                            when('/blogs', {
                                            templateUrl: 'home/home.view.html',
                                            controller: 'Home.IndexController',
                                            controllerAs: 'blogger'
                                        }).
                            when('/blog/:Id', {
                                            template: 'blog.detail.html'
                                        }).
                            otherwise('/blogs');  // default url
                                    }
                         ]);

        function run(){
        };

          
})();
