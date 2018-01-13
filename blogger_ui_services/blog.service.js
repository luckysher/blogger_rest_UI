()(function(){
   'use strict';
    angular
        .module('bloggerui')
        .factory('BlogService', BlogService);

        function BlogService($http, $localStorage){
          var service = {}
          service.Blogs = getBlogs;
          return service;


        }
})();