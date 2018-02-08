(function(){
    'use strict';
        angular
            .module('bloggerui', ['ngRoute', 'ngMessages', 'ngStorage'])
            .config(config)
            .run(run);

        function config($routeProvider) {
                    console.log("loaded config...");

                    $routeProvider
                            .when('blogs', {
                                            resolveAs: '/blogs',
                                            templateUrl: 'home/home.view.html',
                                            controller: 'Home.IndexController',
                                            controllerAs: 'blogger'
                                        })
                            .when('/blog/:Id/', {
                                            resolveAs: '/blog/:Id/',
                                            templateUrl: 'blog/blog.details.html',
                                            controller: 'Blog.IndexController',
                                            controllerAs: 'blogger'
                                        })
                            .otherwise('/blogs/');  // default url
                          }


        function run(){
            console.log("Running...");
        }
})();
