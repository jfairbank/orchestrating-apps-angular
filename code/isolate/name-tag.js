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
