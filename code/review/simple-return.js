return {
  restrict: 'E',
  scope: { name: '@' },
  template: 'Hello, my name is {{name}}',
  link: function(scope) {
    if (!scope.name) {
      scope.name = 'Joe Schmoe';
    }
  }
};
