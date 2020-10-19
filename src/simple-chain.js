const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  length: 0,
  stringChain: '',
  getLength() {
    if(this.chain.length > 0) this.length = this.chain.length - 1;
    return this.length;
  },
  addLink(value = '') {
    if(this.chain.length == 0) this.chain.push('');
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(this.chain[position] == undefined) {
      this.chain.length = 0;
      return new Throw('Incorect number!!!');
    }
    this.chain.splice(position, 1);
    this.length = this.chain.length - 1;
    return this
  },
  reverseChain() {
    this.chain.push('');
    this.chain.reverse();
    this.chain.pop();
    return this
  },
  finishChain() {
    this.stringChain = '';
    this.chain.splice(0, 1);
    this.stringChain = this.chain.join('~~').trim();
    this.length = this.chain.length;
    this.chain = [];
    return this.stringChain;
  }
};

module.exports = chainMaker;
