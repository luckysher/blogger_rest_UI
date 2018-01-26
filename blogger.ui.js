(function(){
    'use strict';
        angular
                .module('bloggerui', ['ui.router', 'ngMessages', 'ngStorage'])
                .config(config)
                .run(run);

        function config(){
        var appName = "Blogger UI";

        };

        function run(){
        };

          
})();
