
function sum(fromN, toN) {
  if(fromN <= toN){
    return fromN + sum(fromN+1, toN);
  }
  return 0;
}

module.exports = sum;
