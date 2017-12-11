var myApp = angular
                   .module("myModule" ,[])
                   .controller("myController" ,function($scope){
                       
                       var employees = [
                                         {name:'Thor',dateOfBirth:new Date('November 12 ,1980') ,gender:'male' ,salary:23000.34},
                           
                                         {name:'Darksider',dateOfBirth:new Date('January 2,1994'),gender:'male',salary:43000.45},
                                         
                                         {name:'Natasha',dateOfBirth:new Date('February 14 ,1996'),gender:'female',salary:54000},
                           
                                         {name:'Thanos',dateOfBirth:new Date('March 12,1809'),gender:'male',salary:21000.12}
                           
                                       ];
                       $scope.employees = employees;
                       $scope.limit = 4;
                   });