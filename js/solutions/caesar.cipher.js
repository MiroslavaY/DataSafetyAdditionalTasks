/**
 *Реализовать шифр Цезаря.
 * */

Module.CaesarCifer = (() => {

  const getShiftedAlphabet = (alphabet, shift) => {
    let shiftedAlphabet = '';

    for (var i = 0; i < alphabet.length; i++) {
      const currentLetter = (alphabet[i + shift] === undefined) ? (alphabet[i + shift - alphabet.length]) : (alphabet[i + shift]);
      shiftedAlphabet += currentLetter;
    }

    return shiftedAlphabet;
  };

  const doCaesarEncrypt = (message, alphabet, shift) => {
    const shiftedAlphabet = getShiftedAlphabet(alphabet, shift);

    return message.split('').map((letter) => {
      return letter === ' ' ? letter : shiftedAlphabet[alphabet.indexOf(letter.toUpperCase())];
    }).join('').toLowerCase();
  };

  const doCaesarDecrypt = (message, alphabet, shift) => {
    const shiftedAlphabet = getShiftedAlphabet(alphabet, shift);

    return message.split('').map((letter) => {
      return letter === ' ' ? letter : alphabet[shiftedAlphabet.indexOf(letter.toUpperCase())];
    }).join('').toLowerCase();
  };

  return {
    doCaesarEncrypt,
    doCaesarDecrypt
  }

})();


