const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const minDamage = 15;
  const maxDamage = dragon.strength;
  return Math.floor(Math.random() * (maxDamage - minDamage)) + minDamage;
};

const warriorDamage = () => {
  const minDamage = warrior.strength;
  const maxDamage = warrior.strength * warrior.weaponDmg;
  return Math.floor(Math.random() * (maxDamage - minDamage)) + minDamage;
};

const mageDamage = () => {
  const minDamage = mage.intelligence;
  const maxDamage = mage.intelligence * 2;
  return Math.floor(Math.random() * (maxDamage - minDamage)) + minDamage;
};

const mageObj = () => ({
  damage: mageDamage,
  spentMana: () => (mage.mana >= 15) ? mage.mana -= 15 : 'Não possui mana suficiente',
});

dragon.damage = dragonDamage();
warrior.damage = warriorDamage();

//PARTE 2

const gameActions = {
  warriorTurn: (damage) => { 
    dragon.healthPoints -= damage();
    warrior.damage;
  },
  mageTurn: (damage) => {
    dragon.healthPoints -= damage();
    warrior.damage;
  }
};
