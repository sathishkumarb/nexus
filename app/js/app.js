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
  ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    $scope.email = "john@smith.com";
    $http.get('/api').success(function(data) {
       //$scope.messages = data;
      $rootScope.$broadcast('messages', data);
    });

    $scope.$on('messages', function(event, data) {
      $scope.messages = data;
    });

    $scope.verify = function () {
      return $scope.email.indexOf('@') == -1;
    }
  }]);

