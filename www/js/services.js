angular.module('starter.services', ['firebase'])




.factory('Activities', ['$firebaseArray', function($firebaseArray){
  var actRef = new Firebase('https://brilliant-torch-2546.firebaseio.com/activities');
  return $firebaseArray(actRef);
}])
