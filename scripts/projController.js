var app = angular.module('osmirApp', []);

app.controller('loginCtrl', function($scope, $http) {
    $scope.login = function(){
      dat = {
        'email' : $scope.email,
        'password' : $scope.password
      };
      //Send data to php page
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
        //Send data to PHP page
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
      var sports = [];
      sports.push($scope.email);
      if($scope.Baseball == "1"){
        sports.push("Baseball");
      }
      if($scope.MBasketball == "1"){
        sports.push("Mens Basketball");
      }
      if($scope.WBasketball == "1"){
        sports.push("Womens Basketball");
      }
      if($scope.Bowling == "1"){
        sports.push("Bowling");
      }
      if($scope.MCrossCountry == "1"){
        sports.push("Mens Cross Country");
      }
      if($scope.WCrossCountry == "1"){
        sports.push("Womens Cross Country");
      }
      if($scope.FieldHockey == "1"){
        sports.push("Field Hockey");
      }
      if($scope.Football == "1"){
        sports.push("Football");
      }
      if($scope.MGolf == "1"){
        sports.push("Mens Golf");
      }
      if($scope.WGolf == "1"){
        sports.push("Womens Golf");
      }
      if($scope.MIceHockey == "1"){
        sports.push("Mens Ice Hockey");
      }
      if($scope.WIceHockey == "1"){
        sports.push("Womens Ice Hockey");
      }
      if($scope.MLacrosse == "1"){
        sports.push("Mens Lacrosse");
      }
      if($scope.WLacrosse == "1"){
        sports.push("Womens Lacrosse");
      }
      if($scope.Rowing == "1"){
        sports.push("Rowing");
      }
      if($scope.Softball == "1"){
        sports.push("Softball");
      }
      if($scope.MSoccer == "1"){
        sports.push("Mens Soccer");
      }
      if($scope.WSoccer == "1"){
        sports.push("Womens Soccer");
      }
      if($scope.MSwimming == "1"){
        sports.push("Mens Swimming");
      }
      if($scope.WSwimming == "1"){
        sports.push("Womens Swimming");
      }
      if($scope.MTennis == "1"){
        sports.push("Mens Tennis");
      }
      if($scope.WTennis == "1"){
        sports.push("Womens Tennis");
      }
      if($scope.MTrackField == "1"){
        sports.push("Mens Track and Field");
      }
      if($scope.WTrackField == "1"){
        sports.push("Womens Track and Field");
      }
      if($scope.MVolleyball == "1"){
        sports.push("Mens Volleyball");
      }
      if($scope.WVolleyball == "1"){
        sports.push("Womens Volleyball");
      }
      if($scope.MWaterPolo == "1"){
        sports.push("Mens Water Polo");
      }
      if($scope.WWaterPolo == "1"){
        sports.push("Womens Water Polo");
      }
      if($scope.Wrestling == "1"){
        sports.push("Wrestling");
      }
      if($scope.Other == "1"){
        sports.push("Other");
      }


      if(sports.length == 1){
        window.alert("Must Choose At Least 1 Sport");
      }else{
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
                   var sportStuff = JSON.stringify(sports);
                   $http.post('playerToSports.php', sportStuff)
                      .then(function(response) {
                      if(response.data == 'Y'){

                        ecDat = {
                          'email' : $scope.email,
                          'name' : $scope.ecName,
                          'num' : $scope.ecNumber
                        };
                        $http.post('newEC.php', ecDat)
                           .then(function(response) {
                           if(response.data == 'Y'){
                             window.location = "homePage.html";;
                           }else{
                             window.alert(response.data);
                           }
                         });
                      }else{
                        window.alert(response.data);
                      }
                    });
               }else{
                 window.alert("Account Already Associated With Email");
               }
             });
         }
       }
  }else{ //If someone just wandered to the page
    window.location = "login.html";
  }

});



app.controller('homePage', function($scope, $http) {
  localStorage.setItem('player', '');
  if(localStorage.getItem('isLoggedIn') == 'Y'){

    //Get List of sports
    $http.post('showSports.php')
       .then(function(response) {
         $scope.allSports = response.data;})
         .catch(function (err) {window.alert("Error Loading Page");});

    //New Athlete Button Pressed
    $scope.changeValue = function($item){
      dat = {
        'sport' : $item.sport
      };

    //Get list of players in sport
    $http.post('showPlayers.php', dat)
       .then(function(response) {
         $scope.players = response.data;})
       .catch(function (err) {
         window.alert("Error Loading Page");});
    }

    //New Athlete Button Pressed
    $scope.newAthlete = function(){
        window.location = "newAthlete.html";
    }

    //Clicked on Player
    $scope.playerInjury = function($item){
      localStorage.setItem('player', $item);
      window.location = "playerReport.html";
    }


  }else{ //If someone just wandered to the page
    window.location = "login.html";
  }
});

// app.controller('playerReports', function($scope, $http) {
//
//   //Check if Logged In
//   if(localStorage.getItem('isLoggedIn') == 'Y'){
//     var player = localStorage.getItem('player');
//     //Get list of players in sport
//     $http.post('showPlayers.php', dat)
//        .then(function(response) {
//          $scope.players = response.data;})
//        .catch(function (err) {
//          window.alert("Error Loading Page");});
//     }
//   }else{
//     window.location = "login.html"
//   }
// });
