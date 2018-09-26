const Util = require('./Util.js');

class Runner {
  constructor() {}
  run(S) {
    if (!S) {
      return 1;
    }

    const matches = {
      '}' : '{',
      ']' : '[',
      ')' : '('
    };


    const opens = ['(', '{', '['];
    const closes = [')', '}', ']'];

    const stack = [];

    for (let i = 0; i < S.length; i += 1) {
      if (opens.indexOf(S[i]) > -1) {
        stack.push(S[i]);
      } else if (closes.indexOf(S[i]) > -1) {
        if (stack.length === 0) {
          return 0;
        }
        if (matches[S[i]] != stack.pop()) {
          return 0;
        }
      }
    }

    return (stack.length === 0) ? 1 : 0;
  }
}

const r = new Runner();
const util = new Util();
// const arr = util.randomIntArr(6, 1, 6);
// const arr = [ 4, 3, 5, 5, 5, 1 ];
// const str = '()(()()(((()())(()()))';
const str = '{[()()]}';
const a = r.run(str);
console.log('Answer =>', a);
