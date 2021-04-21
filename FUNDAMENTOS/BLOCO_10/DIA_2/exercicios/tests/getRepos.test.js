const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Testando a função getRepos', () => {
  const toDoListSd01 = 'sd-01-week4-5-project-todo-list';
  const memeGeneratorSd01 = 'sd-01-week4-5-project-meme-generator';
  const arrTestRepo = [toDoListSd01, memeGeneratorSd01];
  const url = 'https://api.github.com/orgs/tryber/repos'

  it('Retorna se os repositórios estão na lista da função getRepos', async () => {
    expect.assertions(1);
    await expect(getRepos(url)).resolves.toEqual(expect.arrayContaining(arrTestRepo))
  });
});