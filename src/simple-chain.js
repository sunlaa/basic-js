const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  length: 0,
  string: "",
 
   getLength() {
     return this.length;
   },
 
   addLink(value) {
    if (value === undefined) { 
      value = ""
    }
    if (this.length === 0) {
       this.string = `( ${value} )`;
     } else {
       this.string += `~~( ${value} )`;
     }
     this.length++;
     return this;
   },
 
   removeLink(position) {
    if (typeof position !== "number" || isNaN(position) || position <= 0 || position > this.length ) {
      this.string = "";
      this.length = 0;
      throw new Error('You can\'t remove incorrect link!');
    }
    let arr = this.string.split("~~");
    for (let i = 0; i < arr.length; i++) {
      if ((i + 1) === position) {
        arr.splice(i, 1);
      }
    }
    this.string = arr.join("~~");
    return this;
   },
 
   reverseChain() {
    this.string = this.string.split("~~").reverse().join("~~");
    return this;
   },
 
   finishChain() {
    let finished = this.string;
    this.string = "";
    this.length = 0;
    return finished;
   }
 };

module.exports = {
  chainMaker
};
