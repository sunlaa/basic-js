const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(value = true) {
    this.modif = value;
  }

  alphabetIndex(char) {     
    return (`${char}`.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) + 26) % 26;
  }

  alphabetChar(index) {
    return String.fromCharCode('A'.charCodeAt(0) + (index + 26) % 26);
  }

  encrypt(message, key) { 
    if (!message || !isNaN(message) || !key || !isNaN(key)) {
      throw new Error("Incorrect arguments!")
    } 
   let result = '';
   let j = 0;
   let regExp = /[\p{P}\p{S}\d]/u;
  
   for (let i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      result += " ";
    } else if(regExp.test(message[i])) {
      result += message[i];
    } else {
      result += this.alphabetChar(this.alphabetIndex(message[i]) + this.alphabetIndex(key[j]));
      j = (j + 1) % key.length;
    }
   }
   if (this.modif === false) {
    return result.split('').reverse().join('');
   } else {
    return result;
   }
  } 
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !isNaN(encryptedMessage) || !key || !isNaN(key)) {
      throw new Error("Incorrect arguments!")
    } 
    let result = "";
    let j = 0;
    let regExp = /[\p{P}\p{S}\d]/u;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i] === " ") {
        result += " ";
      } else if(regExp.test(encryptedMessage[i])) {
        result += encryptedMessage[i];
      } else {
        result += this.alphabetChar(this.alphabetIndex(encryptedMessage[i]) - this.alphabetIndex(key[j]));
        j = (j + 1) % key.length;
      }
     }
     if (this.modif === false) {
      return result.split('').reverse().join('');
     } else {
      return result;
     }
  }
}

module.exports = {
  VigenereCipheringMachine
};
