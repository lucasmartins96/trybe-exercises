const generateRandomNum = () => Math.floor(Math.random() * (50 - 1 + 1)) + 1;

const generateArr = (callback) => {
  const myArr = [];
  for (let index = 0; index < 10; index++) {
    myArr.push(callback());
  }
  return myArr;
}

const squareElementsArr = (arr) => arr.map((num) => Math.pow(num, 2));

const sumElementsArr = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

const generateArrWithDividends = (num) => [num / 2, num / 3, num / 5, num / 10];
// const myArr = generateArr(generateRandomNum);

const sumArr = async (arr) => {
  const myArrPow2 = squareElementsArr(arr);
  const sum = sumElementsArr(myArrPow2);
  if (sum < 8000) {
    return sum;
  }
  throw new Error('É mais de oito mil! Essa promise deve estar quebrada!');
}

const execute = async () => {
  const myArr = generateArr(generateRandomNum);
  const sum = await sumArr(myArr)
      .then((num) => generateArrWithDividends(num))
      .then((arrNum) => sumElementsArr(arrNum))
      .catch((msg) => msg)
  
  console.log(sum);
  /* try {
    const sum = await sumArr(myArr)
      .then((num) => generateArrWithDividends(num))
      .then((arrNum) => sumElementsArr(arrNum))
    console.log(sum);
  } catch (error) {
    console.log(error);
  } */
}

execute();
/* .then((num) => [num / 2, num / 3, num / 5, num / 10])
.then((arrNum) => sumElementsArr(arrNum))
.catch((msg) => console.log(msg)); */