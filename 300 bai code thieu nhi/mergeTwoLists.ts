// C1
var mergeTwoLists = function (list1: number[], list2: number[]) {
  const newArr = list1.concat(list2);
  let isSwap = false;
  for (let i = 0; i < newArr.length - 1; i++) {
    for (let j = 0; j < newArr.length - i - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        let temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }
  return newArr;
};

let list1 = [1, 2, 4],
  list2 = [1, 3, 4];
console.log(mergeTwoLists(list1, list2));
