#!/usr/bin/node
/* implementation of Binary Search in JavaScript */

function binary_search (list, item) {
  let low = 0;
  let length = list.length;
  let high = length - 1;

  while (low <= high) {
    let mid = (low + high);
    guess = list[mid];
    if (guess == item) {
	    return mid;
    } else if (guess > item) {
	    high = mid - 1;
    } else {
	    low = mid + 1;
    }
  }
  return None;
}
