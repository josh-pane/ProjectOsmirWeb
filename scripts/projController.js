var app = angular.module('osmirApp', []);
var tempThing = '';
app.factory('infoStore', function() {
  var userEmail = {
      Value: ''
  };

  return {
    setUserEmail: function(newObj) {
        userEmail.Value = newObj;
    },
    getUserEmail: function(){
        return userEmail.Value;}
  };

}).controller('loginCtrl', function($scope, $http, infoStore) {
    localStorage.setItem('isLoggedIn','N');
    $scope.login = function(){
      dat = {
        'email' : $scope.email,
        'password' : $scope.password
      };
       $http.post('verifyLogin.php', dat)
          .then(function(response) {
          if(response.data != 'N'){
            infoStore.setUserEmail($scope.email);
            tempThing=$scope.email;
            console.log(infoStore.getUserEmail());
            localStorage.setItem('user', $scope.email);
            localStorage.setItem('isLoggedIn', 'Y');
            //Go to new page
            window.location = "homePage.html";
          }else{
            window.alert("Invalid Username Or Password")
          }
        });
    }

}).controller('newTrainerCtrl', function($scope, $http, infoStore) {

      $scope.createTrainer = function(){
        dat = {
          'email' : $scope.email,
          'name' : $scope.name,
          'sport' : $scope.sport,
          'admin' : $scope.admin,
          'password' : $scope.password
        };
         $http.post('newTrainer.php', dat)
            .then(function(response) {
            if(response.data == 'Y'){
              infoStore.setUserEmail($scope.email);
              window.location = "homePage.html";
            }else{
              window.alert("Account Already Associated With Email")
            }
          });
    }

}).controller('homePage', function($scope, $http, infoStore) {
  if(localStorage.getItem('isLoggedIn') == 'Y'){
    $scope.playerEmail = localStorage.getItem('user');
    console.log(localStorage.getItem('user'));
  }else{
    window.location = "login.html";
  }
});
