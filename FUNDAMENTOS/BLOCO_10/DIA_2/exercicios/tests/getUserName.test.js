const users = {
  4: {
    name: 'Mark'
  },
  5: {
    name: 'Paul'
  }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    };

    return reject({
      error: 'User with ' + id + ' not found.'
    });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('Testando a função getUserName', () => {
  it('Retorna o nome do usuário quando o seu id é passado no parâmetro da função', () => {
    expect.assertions(1);
    return getUserName(4).then(name => {
      expect(name).toBe('Mark');
    });
  });

  it('Retorna a mensagem \'User with id not found.\' se o id passado no parâmetro não for de um funcionário existente', () => {
    expect.assertions(1);
    return getUserName(3).catch(error => {
      expect(error).toEqual({ error: 'User with 3 not found.'});
    });
  });
});