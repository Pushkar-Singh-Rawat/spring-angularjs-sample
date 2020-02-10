App.controller("controllermodule",function($scope,$http,$timeout){
	  
	  $scope.msg ="";
	  $scope.loader=false;
	  $scope.seeresult=true;
	  $scope.proceed=false;
   $scope.demoFunc = function() {  
	   $scope.seeresult=false;
	        var url = "/index";
	      var config = {
	            transformRequest: angular.identity,
	            transformResponse: angular.identity,
	            headers: {
	                'Content-Type': undefined
	            }
	        }
	        
	 
	        $http.get(url,config).then(
	            // Success
	            function(response) {
	                $scope.msg =  response.data;
	                $scope.loader = true; 
                    
	                $timeout(function () { $scope.loader = false;}, 7000);
	                
	                $scope.proceed=false;
	                $timeout(function () { $scope.proceed = true;}, 7000);
	               //add code to execute python file.
	                //or add in the java controllerLayer.java file
	                
	            },
	            // Error
	            function(response) {
	                $scope.msg = response.data;
	                
	            });
	    };
	    
	    $scope.executePythonfile = function() {  
		 	        var url = "/hitPython";
	 	      var config = {
	 	            transformRequest: angular.identity,
	 	            transformResponse: angular.identity,
	 	            headers: {
	 	                'Content-Type': undefined
	 	            }
	 	        }
	 	        
	 	 
	 	        $http.get(url,config).then(
	 	            // Success
	 	            function(response) {
	 	               
	                     
	 	
	 	               //add code to execute python file.
	 	                //or add in the java controllerLayer.java file
	 	                
	 	            },
	 	            // Error
	 	            function(response) {
	 	             
	 	                
	 	            });
	 	    };
	 
});