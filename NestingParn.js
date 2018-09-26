const Util = require('./Util.js');

class Runner {
  constructor() {}
  run(S) {

    if (S.length === 0) {
      return 1;
    }

    if (S.length % 2 === 1) {
      return 0;
    }

    const lefts = [];
    for (let i = 0; i < S.length; i += 1) {
      const char = S.charAt(i);
      if (char === '(') {
        lefts.push(char);
      } else {
        if (lefts.length < 1) {
          return 0;
        }
        lefts.pop();
      }
    }

    return lefts.length === 0 ? 1 : 0;
  }
}

const r = new Runner();
const util = new Util();

const str = "(()(())())";
// const str = "()()()()()()()()";

const a = r.run(str);
console.log('Answer =>', a);
