const Util = require('./Util.js');

class Runner {
  constructor() {}
  run(A, B) {
    let downstream = [];
    let survived = A.length;
    for (let i = 0; i < A.length; i += 1) {
      if (B[i] === 1) {
        downstream.push(A[i]);
      } else {
        while (downstream.length > 0) {
          //downstream smaller pop/kill him
          if (downstream[downstream.length] < A[i]) {
            survived -= 1;
            downstream.pop();
          } else {
            survived -= 1;
            break;
          }
        }
      }
    }
    return survived;
  }
}

const r = new Runner();
const util = new Util();

const A = [4,3,2,1,5];
const B = [0,1,0,0,0];

const a = r.run(A, B);
console.log('Answer =>', a);
