const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('Testando a função compareJsons', () => {
  test('Compare dois objetos (JSON) para verificar se são idênticos', () => {
    expect(obj1).toEqual(obj2);
  });
  
  test('Compare dois objetos (JSON) para verificar se não são idênticos', () => {
    expect(obj2).not.toEqual(obj3);
    expect(obj1).not.toEqual(obj3);
  });
});