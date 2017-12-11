/*var myApp = angular
                   .module("myModule" ,[])
                   .controller("myController" ,function($scope){
                       var employees = [
                           {name:'Hritik' ,dateOfBirth:new Date("November 21, 1975"), gender:'male' ,salary:50000000},
                           
                           {name:'Salman' ,dateOfBirth:new Date("December 26, 1965"), gender:'male' ,salary:80000000},
                           
                           {name:'Sanjay' ,dateOfBirth:new Date("February 1, 1960"), gender:'male' ,salary:30000000},
                           
                           {name:'Sunny' ,dateOfBirth:new Date("April 11, 1988"), gender:'female' ,salary:8000000},
                       ];
                       
                    $scope.employees = employees;  
                    $scope.sortColumn = "name";   
                   });*/

var myApp = angular
                   .module("myModule" ,[])
                   .controller("myController" ,function($scope){
                       var employees = [
                           {name:'Hritik' ,dateOfBirth:new Date("November 21, 1975"), gender:'male' ,salary:50000000},
                           
                           {name:'Salman' ,dateOfBirth:new Date("December 26, 1965"), gender:'male' ,salary:80000000},
                           
                           {name:'Sanjay' ,dateOfBirth:new Date("February 1, 1960"), gender:'male' ,salary:30000000},
                           
                           {name:'Sunny' ,dateOfBirth:new Date("April 11, 1988"), gender:'female' ,salary:8000000},
                       ];
                       
                    $scope.employees = employees;  
                    $scope.sortColumn = "salary";  
                    $scope.reverseSort = false;
                       
                    $scope.sortData = function(column){
                        $scope.reverseSort = ($scope.sortColumn == column)?!$scope.reverseSort :false ;
                        $scope.sortColumn = column;
                    }
                    
                    $scope.getSortData = function(column){
                        if($scope.sortColumn == column){
                            return $scope.reverseSort ? 'triangle-up' : 'triangle-down';
                        }
                            return '';
                    }
                       
                   });