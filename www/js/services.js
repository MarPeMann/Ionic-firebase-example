angular.module('starter.services', ['firebase'])




.factory('Activities', ['$firebaseArray', function($firebaseArray){
  var actRef = new Firebase('https://firebase-url');
  return $firebaseArray(actRef);
}])
