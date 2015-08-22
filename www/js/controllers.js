
angular.module('starter.controllers', ['ionic', 'firebase'])



.controller('DashCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray){

  //$scope.activities = Activities;
  var msgRef = new Firebase('https://samamuttaeri-5552.firebaseio.com/messages/');


  $scope.messages = $firebaseArray(msgRef);

  $scope.setAsRead = function(msg){
    var readRef = new Firebase('https://samamuttaeri-5552.firebaseio.com/messages/' +
      msg.$id);
    readRef.child('isRead').set('true');
  };

  $scope.delNotification = function(msg){
  	console.log("Meni tänne");
  	var delRef = new Firebase('https://samamuttaeri-5552.firebaseio.com/messages/' + msg.$id);
  	delRef.remove();
  };

}]);





