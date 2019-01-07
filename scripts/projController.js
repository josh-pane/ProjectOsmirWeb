var app = angular.module('osmirApp', []);

app.controller('loginCtrl', function($scope, $http) {
    $scope.login = function(){
      dat = {
        'email' : $scope.email,
        'password' : $scope.password
      };
       $http.post('verifyLogin.php', dat)
          .then(function(response) {
          if(response.data != 'N'){
            localStorage.setItem('user', $scope.email);//Set which user
            localStorage.setItem('isLoggedIn', 'Y');//Allow access to homepage
            //Go to new page
            window.location = "homePage.html";
          }else{
            window.alert("Invalid Username Or Password")
          }
        });
    }

});

app.controller('newTrainerCtrl', function($scope, $http) {
      $scope.createTrainer = function(){
        dat = {
          'email' : $scope.email,
          'name' : $scope.name,
          'admin' : $scope.admin,
          'password' : $scope.password
        };
         $http.post('newTrainer.php', dat)
            .then(function(response) {
            if(response.data == 'Y'){
              localStorage.setItem('user', $scope.email); //Set which user
              localStorage.setItem('isLoggedIn', 'Y'); //Allow access to homepage
              window.location = "homePage.html";
            }else{
              window.alert("Account Already Associated With Email")
            }
          });
    }

});

app.controller('newAthlete', function($scope, $http) {
  if(localStorage.getItem('isLoggedIn') == 'Y'){
    $scope.createAthlete = function(){
      dat = {
        'email' : $scope.email,
        'name' : $scope.name,
        'password' : $scope.password,
        'allergies' : $scope.allergies,
        'conditions' : $scope.conditions,
        'status' : 'Cleared'
      };
      $http.post('newAthlete.php', dat)
         .then(function(response) {
         if(response.data == 'Y'){
           window.location = "homePage.html";
         }else{
           window.alert("Account Already Associated With Email")
         }
       });
   }
  }else{ //If someone just wandered to the page
    window.location = "login.html";
  }
});

app.controller('homePage', function($scope, $http) {
  if(localStorage.getItem('isLoggedIn') == 'Y'){
    $scope.playerEmail = localStorage.getItem('user');
    console.log(localStorage.getItem('user'));
  }else{ //If someone just wandered to the page
    window.location = "login.html";
  }
  $scope.newAthlete = function(){
      window.location = "newAthlete.html";
  }
});
