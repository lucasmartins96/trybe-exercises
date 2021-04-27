function encode(decodeMessage) {
  const vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  const decodeMessageChars = decodeMessage.toLowerCase().split('');
  const encodeMessageChars = decodeMessageChars.map((char) => {
    if (vowels[char]) {
      char = vowels[char];
    }
    return char;
  });
  return encodeMessageChars.join('');
}

module.exports = encode;
