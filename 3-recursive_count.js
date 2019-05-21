#!/usr/bin/node
/* A recursive function to count the number of items in an array */

let count = function count (array) {
  if (array.length === 0) { return 0; }

  return 1 + count(array.slice(1));
};
