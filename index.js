var app = angular.module("angularJsTodo", []);

app.controller("todoCtrl", function($scope) {
  $scope.todo = {
    list: [],
    tempItem: ''
  };
  $scope.addNewTodoItem = function() {
    $scope.todo.list.push($scope.todo.tempItem);
    $scope.todo.tempItem = ''
    console.log($scope.todo.list);
  } 
});
