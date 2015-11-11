function Person(name) {
  this.name = name;
}

Person.prototype = {
  constructor: Person,
  hobbies: [],
  addHobby: function(hobby) {
    this.hobbies.push(hobby);
  },
  greet: function() {
    console.log('Hi, my name is ' + this.name + '.');
    console.log('I like to ' + this.hobbies.join(', '));
  }
};

var jeremy = new Person('Jeremy');
jeremy.addHobby('program');

var jet = new Person('Jet');
jet.addHobby('crawl');
