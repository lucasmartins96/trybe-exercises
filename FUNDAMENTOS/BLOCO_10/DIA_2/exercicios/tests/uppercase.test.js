const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

//**Solução:**

it(`uppercase 'test' to equal 'TEST'`, (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  });
});