function MessagesCtrl($scope) {
  $scope.email = "john@smith.com";
  $scope.messages = [
    {time: Date.now(), text: "hello"},
    {time: Date.now(), text: "world"}
  ];
  $scope.verify = function() {
    return $scope.email.indexOf('@') == -1;
  }
}
