angular
  .module('osmir')
  .controller('osmirController', function($scope) {

      $scope.data = [
        {
          "name": "Michael Coffey",
          "injury": "Sprained Ego",
          "status": "Cleared",
          "position": "Left Bench"
        },
        {
          "name": "Josh Pane",
          "injury": "None",
          "status": "Cleared",
          "position": "Quarterback"
        },
        {
          "name": "Darius Sherman",
          "injury": "Bad Bitch Brain",
          "status": "IR",
          "position": "Right Bench"
        },
        {
          "name": "Kerby Kaska",
          "injury": "Cramping Hand",
          "status": "Watchlist",
          "position": "Waterboy"
        },
        {
          "name": "Stephanie A",
          "injury": "Severed Arm",
          "status": "IR",
          "position": "Linebacker"
        },
      ];
  });

  
  angular
    .module('temp')
    .controller('dbStuff', function($scope, $http) {
      $scope.insertData = function(){
        $http.post(
          "insert.php", {'sport':$scope.sport}
        ).success(function(data){
          alert(data);
        });
      }

    });
