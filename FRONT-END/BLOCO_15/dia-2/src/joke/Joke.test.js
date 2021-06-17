// App.test.js
import React from 'react';
import { render } from '@testing-library/react'
import Joke from './Joke';

afterEach(() => jest.clearAllMocks());
it('fetch joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  /* 
    1 - Primeiro exemplo do mock de fetch
  jest.spyOn(global, "fetch")
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  }); 
  */

  /* 
    2 - Segundo exemplo do mock de fetch
  global.fetch = jest.fn(()=>
  Promise.resolve({
    json: ()=> Promise.resolve(joke)
  })); */

  //3 - Terceiro exemplo do mock de fetch
  global.fetch = jest.fn(async () => ({
    json: async () => joke
  }));

  const { findByText } = render(<Joke />);
  await findByText('Whiteboards ... are remarkable.');
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    {"headers": {"Accept": "application/json"}}
  );
});