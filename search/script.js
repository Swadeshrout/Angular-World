var myApp = angular
                  .module("myModule" ,[])
                  .controller("myController" ,function($scope){
                      
                      var employees = [
                            {name:'Hritik' ,age:42 ,gender:'male' ,dob: new Date("12 March ,1975") ,salary:10000000 ,city:'Mumbai'},
                            
                            {name:'Ranveer' ,age:32 ,gender:'male' ,dob: new Date("2 April ,1985") ,salary:8000000 ,city:'Delhi'},
                            
                            {name:'Salman' ,age:52 ,gender:'male' ,dob: new Date("26 December ,1975") ,salary:80000000 ,city:'Nagpur'},
                          
                            {name:'Ramcharan' ,age:35 ,gender:'male' ,dob: new Date("21 January ,1985") ,salary:5000000 ,city:'Hyderabad'}
                      ];
                      
                      $scope.employees = employees;
                  }); 