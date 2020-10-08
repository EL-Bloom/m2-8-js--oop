// Exercise 1.1
// ------------
// Creating a Cat class.

// A) Add some properties to our class instances.
// Objects created via this class should have the following properties:

// {
//   species: 'cat',
//   tiredness: 0,
//   hunger: 0,
//   loneliness: 0,
//   happiness: 0,
// }

class Cat {
  constructor(species, tiredness, hunger, loneliness, happiness, name) { 
    this.species = species;
    this.tiredness = tiredness; 
    this.hunger = hunger; 
    this.loneliness =loneliness; 
    this.happiness =happiness; 
    this.name = name;
  } 

}
 


// B) Instantiate a cat called 'boots' with the Cat class.
const boots = new Cat('cat', '0', '0', '0', '0');
// C) What do you see when you console.log(boots)?
// Cat {
//   species: 'cat',
//   tiredness: '0',
//   hunger: '0',
//   loneliness: '0',
//   happiness: '0',
//   
// }
// D) What if I want to output just boots' species?
console.log(boots.species);