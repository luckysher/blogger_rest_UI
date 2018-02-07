(function(){
    'use strict';
        angular
                .module('bloggerui', ['ui.router', 'ngMessages', 'ngStorage'])
                .config(config)
                .run(run);

        function config($routeProvider) {

                    $routeProvider.
                            when('/blogs', {
                                            templateUrl: 'home/home.view.html',
                                            controller: 'Home.IndexController',
                                            controllerAs: 'blogger'
                                        }).
                            when('/blog/:Id', {
                                            template: 'blog/blog.details.html',
                                            controller: 'Blog.IndexController',
                                            controllerAs: 'blogger'
                                        }).
                            otherwise('/blogs');  // default url
                                    }


        function run(){
            console.log("Running...");
        };

          
})();
