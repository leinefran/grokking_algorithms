#!/usr/bin/node
/* implementation of Array Sum using recursion */

exports.sum = function (array, n) {
  if (array.length === n) {
    return 0;
  }
  return array[n] + sum(array, n + 1);
}
