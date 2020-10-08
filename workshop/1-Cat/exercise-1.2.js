// Exercise 1.2
// ------------
// Creating a Cat class - Part 2

// A) In the previous exercise, Boots' name is not part of its object.
// Update the Cat class to accept have a name parameter and a breed parameter and
// then pass Boots' name and breed as arguments when you instantiate the boots object.
// When you are done, console.log the boots object
// and confirm that you have everything in there.

// By the way, Boots is a Simaese cat... 
  
class Cat {
    constructor(species, tiredness, hunger, loneliness, happiness, name, breed) { 
      this.species = species;
      this.tiredness = tiredness; 
      this.hunger = hunger; 
      this.loneliness =loneliness; 
      this.happiness =happiness; 
      this.name = name; 
      this.breed = breed;
    } 
  
  }
    
  const boots = new Cat('cat', '0', '0', '0', '0','boots','siamese');  
  console.log(boots);