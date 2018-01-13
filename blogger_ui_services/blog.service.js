()(function(){
   'use strict';
    angular
        .module('bloggerui')
        .factory('BlogService', BlogService);

        function BlogService($http, $localStorage){
          var service = {}
          service.Blogs = getBlogs;
          return service;

            // get the available blogs details
            function getBlogs(callback){

                  $http.get('http://127.0.0.1:8000/blogs', { headers : Headers }).then(function success(response){
                                callback(response.data);
                        },function error(response){ console.log("no blogs")});
            }
        }
})();