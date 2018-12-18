var app = angular.module('osmirApp', []);
var tempThing = '';
app.service('infoStore', function() {
  var userEmail = [];

  return {
    setUserEmail: function(newObj) {
        userEmail.push(newObj);
    },
    getUserEmail: function(){
        return userEmail;}
  };

});

//Login Controller
app.controller('loginCtrl', function($scope, $http, infoStore) {
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
            //Go to new page
            window.location = "homePage.html";
          }else{
            window.alert("Invalid Username Or Password")
          }
        });
    }

});

//Create Trainer
app.controller('newTrainerCtrl', function($scope, $http, infoStore) {

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

});

//Create Trainer
app.controller('homePage', function($scope, $http, infoStore) {
    console.log(infoStore.getUserEmail());
    console.log(tempThing);
    $scope.playerEmail = infoStore.getUserEmail();

});
