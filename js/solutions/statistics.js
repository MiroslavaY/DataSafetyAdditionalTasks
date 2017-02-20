/**
 * Реализовать подсчет статистик встречаемости букв.Составить шаблоны для художественных произведений,
 * технической документации,
 * сказок, выступлений публичных лиц.
 */
/**
 * Реализовать подсчет статистик криптограмм, полученых методом Цезаря. Автоматизировать криптоанализ таких шифрограмм.
 * */


Module.Statistics = (()=> {

  const countLetters = (text) => {
    const hash = {};
    const reg = /[a-zA-ZА-Яа-яЁёЇї]/;
    let lettersAmount = 0;

    for (const symbol of text) {
      if (reg.test(symbol)) {
        lettersAmount++;
        hash.hasOwnProperty(symbol) ?
          hash[symbol] += 1 :
          hash[symbol] = 1;
      }
    }
    return {amount: lettersAmount, hash: hash};
  };

  const countPercentage = (text) => {
    const hashObject = countLetters(text);
    const allLetters = hashObject.amount;
    const hashTable = hashObject.hash;
    const statistic = {all: '100 %'};

    for (const char in hashTable) {
      statistic[char] = `${(100 * hashTable[char]) / allLetters} %`;
    }

    return Object.assign({}, {lettersAmount: allLetters}, statistic);
  };

  return {
    countPercentage
  }
})();



