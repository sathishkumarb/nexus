angular.module('app', [])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  //$locationProvider.html5Mode(true);
  $routeProvider.when('/messages', {
    templateUrl:'/views/messages.html',
    controller:'MessagesCtrl'
  });
  $routeProvider.when('/settings', {
    templateUrl:'/views/settings.html'
  });
  $routeProvider.otherwise({
    redirectTo:'/'
  });
}]).controller('MessagesCtrl',
  ['$scope', function ($scope) {
    $scope.email = "john@smith.com";
    $scope.messages = [
      {time:Date.now(), text:"hello"},
      {time:Date.now(), text:"world"}
    ];
    $scope.verify = function () {
      return $scope.email.indexOf('@') == -1;
    }
  }]);

