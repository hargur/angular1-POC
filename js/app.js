var app = angular.module("planets",['ngRoute','ngAnimate','ngTouch']);
app.config(['$routeProvider',function('$routeProvider'){
    $routeProvider.
    when("/",{
        templateUrl:"views/form.htm",
        controller:"mycontroller"
    }).
    when("/planet",{
        templateUrl:"views/listing.htm",
        controller:"mycontroller"
    });
}]);

app.controller("mycontroller",['$rootScope','$scope','$http','$location',function('$rootScope','$scope','$http','$location'){
    $scope.changelocation=function(){// for now not posting the data as no api
        $location.path="planet";    // for navigating when routers are provided 
    };
    $http.get("https://swapi.co/api/planets").then(function(response){
        $scope.data=response.results;
        $scope.max=0;
        //$scope.max=max(data.population);  ---using max function for javascript else the below function
        for(i in $scope.data){
            if($scope.data[i]>$scope.max)
                $scope.max=$scope.data[i];
        }
    })
}]);