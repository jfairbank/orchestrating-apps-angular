// In a child directive
var items = [];
$scope.$on('add:item', function(e, n) {
  items.push(n);
});

// In a parent directive
$scope.$on('select:greeting', function(e, greeting) {
  console.log(greeting.toUpperCase());
});
