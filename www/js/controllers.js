
angular.module('starter.controllers', ['ionic', 'firebase'])



.controller('DashCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray){

  var msgRef = new Firebase('https://my-firebase-app-url/messages/');


  $scope.messages = $firebaseArray(msgRef);

  $scope.setAsRead = function(msg){
    var readRef = new Firebase('https://my-firebase-app-url/messages/' +
      msg.$id);
    readRef.child('isRead').set('true');
  };

  $scope.delNotification = function(msg){
  	console.log("Meni tänne");
  	var delRef = new Firebase('https://my-firebase-app-url/messages/' + msg.$id);
  	delRef.remove();
  };

}]);





