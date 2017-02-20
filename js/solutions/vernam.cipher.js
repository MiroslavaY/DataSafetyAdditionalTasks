/**
 * Реализовать шифрование методом одноразовый блокнот.
 * */
Module.VernamCipher = (() => {

  const generateRandomKey = (openedStr) => {
    let key = '';

    for (let i = 0; i < openedStr.length; i++) {
      key += String.fromCharCode(getRandomInt(65, 255));
    }

    return key;
  };

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const doVernamEncryption = (openedStr, key) => {
    return openedStr.split('').map((openedStrChar, i) => {
      const encryptedChar = openedStrChar.charCodeAt(0) ^ key[i].charCodeAt(0);
      return String.fromCharCode(encryptedChar);
    });
  };

  const doVernamDecryption = (encrypted, key) => {
    return encrypted.map((encryptedStrChar, i) => {
      const decryptedChar = encryptedStrChar.charCodeAt(0) ^ key[i].charCodeAt(0);
      return String.fromCharCode(decryptedChar);
    });
  };


  return {
    generateRandomKey,
    doVernamEncryption,
    doVernamDecryption
  }
})();



