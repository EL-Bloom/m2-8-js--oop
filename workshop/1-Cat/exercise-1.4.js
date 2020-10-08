// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);
 
class Cat {
    constructor(name, breed) {
      this.species = "cat";
      this.tiredness = 70;
      this.hunger = 50;
      this.loneliness = 50;
      this.happiness = 20;
      this.name = name;
      this.breed = breed;
    };
    sleep = (hours) => {
      this.tiredness = this.tiredness - hours * 5;
      this.happiness = this.happiness + 5 * hours;
    };
    eating = (kibbles) => {
      this.hunger = this.hunger - kibbles / 5;
      this.happiness = this.happiness + 5 * kibbles;
    };
    playTime = (minutes) => {
      this.loneliness = this.loneliness - minutes * 3;
      this.happiness = this.happiness + 1 * minutes;
    }; 
    wait = (minutes) => { 
        this.hunger = this.hunger + minutes * 2;
        this.loneliness =  this.loneliness + minutes * 5;
        this.tiredness = this.tiredness + minutes * 3;
    }
  }
  
  const boots = new Cat("boots", "siamese");
  boots.playTime(10);
  boots.eating(10);
  boots.sleep(10); 
  boots.wait(20);
  console.log(boots);
  