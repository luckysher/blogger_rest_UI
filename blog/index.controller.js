(function(){
    'use strict';
    angular
        .module('bloggerui')
        .controller('Blog.IndexController', blogController);

        function blogController($scope, $routeParams){

            var blogger = this;
            blogger.blog_id = $routeParams.Id;

        }
})();
