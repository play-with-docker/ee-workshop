'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('LoginCtrl', function($scope, $location, pwdService) {


    pwdService.assignSession()
      .then(function(sessionId) {
        $location.path('/'+sessionId);
      }, function() {
        waitingDialog.show('No more sessions available');
      });
  });
