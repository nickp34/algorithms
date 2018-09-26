const Util = require('./Util.js');

class Runner {
  constructor() {}
  run(A) {
    const len = A.length;
    let size = 0;
    let most = null;

    for (let i = 0; i < len; i +=1 ) {
      if (size === 0) {
        size += 1;
        most = A[i];
      } else {
        if (most != A[i]) {
          size -= 1;
        } else {
          size += 1;
        }
      }
    }

    let candidate = -1;
    if (size > 0) {
      candidate = most;
    }

    let cnt = 0;
    let leaderIndex = -1;

    for (let i = 0; i < len; i += 1) {
      if (A[i] === candidate) {
        cnt += 1;
      }
      if (cnt > len / 2) {
        leaderIndex = i;
        break;
      }
    }
    return leaderIndex;
  }
}

const r = new Runner();
const util = new Util();

// const str = "(()(())())";
// const str = "()()()()()()()()";

const arr = [2, 1, 1, 1, 3];
const a = r.run(arr);
console.log('Answer =>', a);
