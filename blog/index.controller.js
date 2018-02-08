(function(){
    'use strict';
    angular
        .module('bloggerui')
        .controller('Blog.IndexController', blogController);

        function blogController($scope, $routeParams){

            var blogger = this;
            // blog id for accessing blog
            blogger.blog_id = $routeParams.Id;

        }
})();
