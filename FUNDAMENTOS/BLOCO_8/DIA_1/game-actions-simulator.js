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

const mageObj = () => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mageMana > 15) {
    const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
    return turnStats;
};

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
