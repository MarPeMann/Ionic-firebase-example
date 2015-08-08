
angular.module('starter.controllers', ['ionic', 'firebase'])



.controller('DashCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray){

  //$scope.activities = Activities;
  var msgRef = new Firebase('https://firebase-url');


  $scope.messages = $firebaseArray(msgRef);






// taskMsgRef.on('child_added', function(snap) {
//       msgRef.child(snap.key()).once('value', function() {
//         // Render the comment on the link page.
//         var query = msgRef.limitToLast(1);
//         $scope.messages = $firebaseArray(query); 
//       });
}]);





