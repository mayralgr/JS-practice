'use strict'; 
(function() {

  // object
  /*
  let person = {
    firstName: 'Jim',
    lastName: 'Cooper',
    age: 17,
    isAdult: function() {return this.age >= 18;}
  };

  display(person.isAdult())

  */

  /*function registerUser(fName, lName){
    let person = {
      firstName: fName,
      lastName: lName,
    };
    display(person);
  }*/

  /*function registerUser(firstName, lastName){
    let person = {
      firstName: firstName,
      lastName: lastName,
    };
    display(person);
  }*/

  /*function registerUser(firstName, lastName){
    let person = {
      firstName,
      lastName,
    };
    display(person);
  }
  registerUser('Kim', 'Cooper')
  */

  let person = {
    firstName: 'Jim',
    lastName: 'Cooper',
    age: 17,
    // cant use it outside of an object
    isAdult () { return this.age >= 18; }
  };
  // display(person.isAdult());
  //display(Object.keys(person)) // fields
  // display(person) // fields and values

  // object keys and for in give the same
  for( let propertyName in person) {
    display(propertyName)
  }

 

})();