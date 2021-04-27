function decode(encodeMessage) {
  const numbers = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  const encodeMessageChars = encodeMessage.split('');
  const decodeMessageChars = encodeMessageChars.map((char) => {
    if (numbers[char]) {
      char = numbers[char];
    }
    return char;
  });
  return decodeMessageChars.join('');
}

module.exports = decode;
