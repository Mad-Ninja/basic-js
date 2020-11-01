const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count = 0;
  arr.forEach((current) => {
    const ArrCats = current.filter((value) => {
      return value === "^^";
    })
    count += ArrCats.length;
  })
  return count;
};
