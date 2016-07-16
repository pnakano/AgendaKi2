angular.module('app.controllers', ['firebase','ionic'])

.controller('menuCtrl', ['$scope', function($scope) {
  
}])
  
.controller('loginCtrl',['$scope','$location','CommonProp','$firebaseAuth', function($scope,$location,CommonProp, $firebaseAuth) {
    var firebaseObj = new Firebase("https://leandropicoloto.firebaseio.com/");
    var loginObj = $firebaseAuth(firebaseObj);
       
    
        $scope.user = {};
        $scope.SignIn = function(e) {
        e.preventDefault();
        var username = $scope.user.email;
        var password = $scope.user.password;
        loginObj.$authWithPassword({
                email: username,
                password: password
            })
            .then(function(user) {
                //LOGIN FEITO COM SUCESSO
                console.log('Authentication successful');
                CommonProp.setUser(user.password.email);
		        $location.path('/app/home');
            
        }, function(error) {
            //Failure callback
            console.log('Authentication failure');
        });
        }
    }])

   
.controller('cadastroCtrl',['$scope','CommonProp','$location','$firebaseAuth', function($scope,CommonProp,$location,$firebaseAuth) {
 	$scope.mesg = 'ola';
 	var firebaseObj = new Firebase("https://leandropicoloto.firebaseio.com/");
    var auth = $firebaseAuth(firebaseObj);
       
      
        $scope.user ={};
        $scope.regForm ={};
        $scope.signUp = function() {
            
        if (!$scope.regForm.$invalid) {
              
            var email = $scope.user.email;
            var password = $scope.user.password;
           
            
        if (email && password) {
            auth.$createUser(email, password)
                .then(function() {
                    
                    console.log('User creation success');
                    $location.path('/login');
                        
               }
            )}
     }}

}])
            
.controller('sobreCtrl', ['$scope', function($scope) { 
    
}])
.controller('homeCtrl', ['$scope', function($scope) {
  
}])
.controller('cadastrosCtrl', ['$scope', function($scope) {
  
}])
.controller('configuracaoCtrl', ['$scope', function($scope) {
  
}])
.controller('clienteCtrl', ['$scope', function($scope) {
  
}])





 