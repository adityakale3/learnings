let arr = [11, 12, 13, 4, 5, 6, 7, 14, 15, 16, 17, 19, 20, 1, 2, 3, 8, 9, 10];

let newArr = arr.sort((a, b) => a - b);

let missingError = (newArr) => {
  for (let i = 0; i < newArr.length; i++) {
    if (i + 1 !== newArr[i]) {
      return i + 1;
    }
  }
};

console.log(missingError(newArr));
