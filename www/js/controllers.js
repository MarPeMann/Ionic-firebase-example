
angular.module('starter.controllers', ['ionic', 'firebase'])



.controller('DashCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray){

  //$scope.activities = Activities;
  var msgRef = new Firebase('https://brilliant-torch-2546.firebaseio.com/messages/');


  $scope.messages = $firebaseArray(msgRef);

  $scope.setAsRead = function(msg){
    var readRef = new Firebase('https://brilliant-torch-2546.firebaseio.com/messages/' +
      msg.$id);
    readRef.child('isRead').set('true');
  };

}]);





