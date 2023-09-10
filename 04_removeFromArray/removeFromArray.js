const removeFromArray = function(array, ...item) {
  return array.filter((el) => !item.includes(el));
};

// Do not edit below this line
module.exports = removeFromArray;
