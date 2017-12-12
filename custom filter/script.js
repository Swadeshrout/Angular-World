var myApp = angular
                   .module("myModule" ,[])
                   .filter("gender" ,function(){
                       return function(gender){
                           switch(gender){
                               case 1:
                                   return "Male";
                               case 2:
                                   return "Female";
                           }
                       }
                   })
                   .controller("mycontroller" ,function($scope){
                       
                       var bio = [
                                  {name:'Swadesh' ,age:25 ,gender:1 ,city:'Cuttack'},
                                  {name:'Tamannaah' ,age:28 ,gender:2 ,city:'Mumbai'},
                                  {name:'Hritik' ,age:42 ,gender:1 ,city:'Mumbai'},
                                  {name:'NTR' ,age:32 ,gender:1 ,city:'Hyderabad'}
                       ];
                       
                       $scope.bio = bio;
                   });