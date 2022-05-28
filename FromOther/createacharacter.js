.//create a hero class and a goblin class if the goblin defense is higher than the hero attack. 
// the goblin takes no damage.
// hero class-> name, int attack, int defense, int health
// goblin class -> int attack, int defense, int health

//make a function return an object depending what the user input is.
//const array = require(.);


class Character {

	constructor(name, type) {
		this.name = name;
		this.type = type;
		this.attack = 2;
		this.defense = 1;
		this.health = 4;
		
	}


}

//create classes for the different types
class Fire extends Character {

}

class Water extends Character {
  
}

class Earth extends Character {
  
}

class Wind extends Character {
  
}

class Hero extends Character {

	sock(target) {
		if (target.defense < this.attack) {
			return target.health -= this.attack;
		}

		return "DEFENSE TOO HIGH"
	}

	speak() {
		console.log("I AM THE HERO")
	}


}

class Goblin extends Character {



}


function createACharacter() {
	let playerType = prompt("Pick a Hero power\n fire, water, earth, wind").toLocaleLowerCase();

	let playerName = prompt("Name?");

  switch (playerType) {
    case "fire": 
      return new Fire(playerName, playerType);
     
    case "water": 
      return new Water(playerName, playerType);
      
    case "earth": 
      return new Earth(playerName, playerType);
      
    case "wind": 
      return new Wind(playerName, playerType);
      
  }

}

