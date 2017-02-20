//Vernam cipher----------
const vernamEncryptBtn = document.getElementById('vernam-encrypt');
const vernamDecryptBtn = document.getElementById('vernam-decrypt');

const vernamEncryptTxt = document.getElementById('vernam-encrypted-text');
const vernamDecryptTxt = document.getElementById('vernam-decrypted-text');

const vernamKey = document.getElementById('vernam-key');
let keyValue = '';
let encryptedText = '';

vernamEncryptBtn.addEventListener('click', () => {
  const sourceTxt = document.getElementById('vernam-cipher-source').value;
  keyValue = Module.VernamCipher.generateRandomKey(sourceTxt);
  encryptedText = Module.VernamCipher.doVernamEncryption(sourceTxt, keyValue).join('');
  vernamKey.innerHTML = keyValue;
  vernamEncryptTxt.innerHTML = '';
  vernamEncryptTxt.innerHTML = encryptedText;
});

vernamDecryptBtn.addEventListener('click', () => {
  const encryptedText = document.getElementById('vernam-encrypted-text').innerHTML;
  console.log(keyValue);
  vernamDecryptTxt.innerHTML = '';
  vernamDecryptTxt.innerHTML = Module.VernamCipher.doVernamDecryption(encryptedText.split(''), keyValue).join('');
});


//XOR-------------
const xorInputs = document.querySelectorAll('[data-handler=xor-input]');
const xorResult = document.getElementById('xor-result');


xorInputs.forEach((input) => input.addEventListener('change', () => {
  const xorSelects = document.querySelectorAll('[data-handler=xor-input]');
  xorResult.innerHTML = '';
  xorResult.innerHTML = Module.XOR(+xorSelects[0].value, +xorSelects[1].value);

}));


//Caesar-----------
const encryptBtn = document.getElementById('caesar-encrypt');
const decryptBtn = document.getElementById('caesar-decrypt');

const encryptTxt = document.getElementById('caesar-encrypted-text');
const decryptTxt = document.getElementById('caesar-decrypted-text');

const alphabetEN = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabetRU = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЬЫЭЮЯ';

encryptBtn.addEventListener('click', () => {
  const sourceTxt = document.getElementById('caesar-source-text').value;
  const shift = document.getElementById('caesar-shift').value;
  encryptTxt.innerHTML = '';
  encryptTxt.innerHTML = Module.CaesarCifer.doCaesarEncrypt(sourceTxt, alphabetEN, +shift);
});

decryptBtn.addEventListener('click', () => {
  const encryptedText = document.getElementById('caesar-encrypted-text').innerHTML;
  const shift = document.getElementById('caesar-shift').value;
  decryptTxt.innerHTML = '';
  decryptTxt.innerHTML = Module.CaesarCifer.doCaesarDecrypt(encryptedText, alphabetEN, +shift);
});


//Statistic for Caesar-------


const caesarStatBtn = document.getElementById('caesar-stat-btn');

caesarStatBtn.addEventListener('click', () => {
  const sourceTxt = document.getElementById('caesar-source-text').value;
  const encrypted = document.getElementById('caesar-encrypted-text').innerText;

  const statSection = document.getElementById('caesar-statistic');
  const statEncryptedSection = document.getElementById('caesar-encrypted-statistic');

  statSection.innerHTML = '';
  statEncryptedSection.innerHTML = '';
  appendValues(Module.Statistics.countPercentage(sourceTxt), statSection);
  appendValues(Module.Statistics.countPercentage(encrypted), statEncryptedSection);
});

//Statistic for templates-------
const templates = document.getElementById('templates');

templates.addEventListener('change', () => {
  const currentTemplate = document.getElementById('templates').value;
  const textSection = document.getElementById('template-text');
  const statSection = document.getElementById('template-statistic');
  const text = Module.templates[currentTemplate];
  const statObject = Module.Statistics.countPercentage(text);

  textSection.innerHTML = '';
  statSection.innerHTML = '';

  textSection.innerHTML = text ? text : 'Please, select a template';
  appendValues(statObject, statSection);
});


function appendValues(statObject, blockToAppend){
  for (const char in statObject) {
    const p = document.createElement('p');
    p.innerHTML = `${char} : ${statObject[char]}`;
    blockToAppend.appendChild(p);
  }
};