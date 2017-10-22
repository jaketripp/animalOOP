// Design an object oriented class structure to represent three animals, a cat, a dog, and a cow.
 
// All animals walk the same..
 
// The animals each make a sound, but the sounds are different. There should be a required common method to make the sound.
 
// The cat makes a meow sound
// The dog makes a bark sound
// The cow makes a quack sound

function Animal(sound) {
	this.walk = function(){
		return 'walks just like the other animals';
	};
	this.sound = sound;
	this.speak = function(){
		return this.sound;
	};
}

var cat = new Animal('meow');
var dog = new Animal('bark');
var cow = new Animal('quack');

cat.walk();
dog.walk();
cow.walk();

cat.speak();
dog.speak();
cow.speak();