(function(){
    'use strict';
        angular
                .module('bloggerui', ['ui.router', 'ngMessages', 'ngStorage'])
                .config(config)
                .run(run);

        function config(['$routeProvider', function config($routeProvider) {

                    $routeProvider.
                            when('/blogs', {
                                            template: 'home.view.html'
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
