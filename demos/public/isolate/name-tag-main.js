var app = angular.module('app', []);

app.directive('nameTag', function() {
  return {
    scope: {
      age: '@age',
      name: '=',
      selectHobby: '&onSelectHobby'
    },
    templateUrl: 'name-tag.html',
    link: function(scope, el, attrs) {
      scope.hobbies = ['program', 'read', 'play guitar'];
      scope.age = attrs.age;
    }
  };
});

app.controller('MyCtrl', function($scope) {
  $scope.name = 'Jeremy';

  $scope.selectHobby = function(hobby) {
    $scope.selectedHobby = hobby;
  };
});
