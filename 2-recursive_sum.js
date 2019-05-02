#!/usr/bin/node
/* implementation of Array Sum using recursion */

let sum = function sum(array){

    if (array.length === 0)
	return 0;

    /* array.slice(1) creates a shallow copy of the array starting from the first element onwards, and no mutation ever occurs on the original array. */
    return array[0] + sum(array.slice(1));

}
