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
    var hobbies = this.hobbies.join(', ');
    console.log('Hi, my name is ' + this.name + '.');
    console.log('I like to ' + hobbies + '.');
  }
};
export default Person;
