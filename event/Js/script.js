/*var myApp = angular.module("Mymodule" ,[]);*/

/*
var myController = function($scope){
    $scope.message ="Its working!!";
}
*/

/*
myApp.controller("myController" ,function($scope){
						$scope.message = "Its working!!";	
});
*/

/*myApp.controller("myController",myController);*/

/*myApp.controller("myController" ,function($scope){
    var bio = {
        fname:'Swadesh',
        lname:'Rout',
        age:25
    };
    
    $scope.bio = bio;
});*/

/*Method chaining*/

/*var myApp = angular
                  .module("Mymodule", [])
                  .controller("myController" ,function($scope){
                      var bio = {
                        fname:'Swadesh',
                        lname:'Rout',
                        age:25
                      };
    
                  $scope.bio = bio;
                      
                  });*/

/*var myApp = angular
                   .module("Mymodule", [])
                   .controller("myController" ,function($scope){
                       
                       var bio = {
                                  fname:'Swadesh',
                                  lname:'Rout',
                                  age:25,
                                  pic:'images/Swadesh.jpg'
                                  
                                 };
                       $scope.bio = bio;
                   });*/

/*var myApp = angular
                   .module("Mymodule" ,[])
                   .controller("myController" ,function($scope){
                       
                       var bio = [
                                  {fname:'Swadesh',lname:'Rout',age:25},
                                  {fname:'Rohit',lname:'Sharma',age:30},
                                  {fname:'Hritik',lname:'Roshan',age:42}
                           
                                 ];
                       $scope.bio = bio;
                   });*/

/*var myApp = angular
                   .module("Mymodule", [])
                   .controller("myController" ,function($scope){
                       
                       var bio = [
                                  {name:'Swadesh',
                                   hobbies:[
                                       {name:'Painting'},
                                       {name:'Designing'},
                                       {name:'Cricket'}
                                    ]
                                  },
                           
                                  {name:'Rohit',
                                   hobbies:[
                                       {name:'Cricket'},
                                       {name:'Music'},
                                       {name:'Sports'}
                                   ]
                                  },
                           
                                  {name:'Hritik',
                                   hobbies:[
                                       {name:'Dance'},
                                       {name:'Acting'},
                                       {name:'Good look'}
                                   ]
                                  }
                                 ];
                       $scope.bio = bio;
                   });*/


var myApp = angular
                   .module("Mymodule" ,[])
                   .controller("myController" ,function($scope){
                       
                       var technologies = [
                           {name:'Java',likes:0,dislikes:0},
                           {name:'Javascript',likes:0,dislikes:0},
                           {name:'JQuery',likes:0,dislikes:0},
                           {name:'Angular',likes:0,dislikes:0}
                       ];
                       
                       $scope.technologies = technologies;
                       
                       $scope.incrementLikes = function(technology){
                           technology.likes++;
                       }
                       
                       $scope.incrementDislikes = function(technology){
                           technology.dislikes++;
                       }
                       
                   });