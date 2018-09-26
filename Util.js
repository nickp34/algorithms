class Util {
  constructor() {}

  randomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

  randomInt(min, max) {
    return Math.floor(this.randomFloat(min, max));
  }

  randomStr(len) {
    let str = '';
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < len; i += 1) {
      str += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return str;
  }

  randomStrArr(arrLen, strLen) {
    const arr = [];
    for (let i = 0; i < arrLen; i += 1) {
      arr.push(this.randomStr(strLen));
    }
    return arr;
  }

  randomIntArr(arrLen, min, max) {
    const arr = [];
    for (let i = 0; i < arrLen; i += 1) {
      arr.push(this.randomInt(min, max));
    }
    return arr;
  }
}

module.exports = Util;

