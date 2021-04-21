const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalsFound = Animals.filter((animal) => animal.age === age);
      return (animalsFound.length > 0) 
        ? resolve(animalsFound) 
        : reject('Não há animais na idade especificada!');
    }, 100);
  })
);

const getAnimal = (age) => (
  findAnimalByAge(age).then(animal => animal)
)
// ---------------------

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne um array com o objeto do animal', () => {
      expect.assertions(1);
      return expect(getAnimal(5)).resolves.toContainEqual({ name: 'Preguiça', age: 5, type: 'Cat' });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return expect(getAnimal(3)).rejects.toBe('Não há animais na idade especificada!');
    });
  });
});