const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else {
    const mid = (Math.floor(array.length / 2));
    if(array.length % 2 === 0) {
      return array.slice(mid - 1, mid + 1)
    } else {
      return array.slice(mid, mid + 1)
    };
  }
};

module.exports = middle;