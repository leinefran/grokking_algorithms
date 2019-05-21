#!/usr/bin/node
// implementation of quickrsort in JavaScript

function quicksort (array) {
    if (array.length < 2) {
	return array;
    }
    else {
	let pivot = array[0];

	// subarray of all elements less than the pivot
	var less = array.filter(i => i <= pivot);
	console.log(less);

	//subarray of all elements greater than the pivot
	var greater = array.filter(i => i => pivot);
    }
    let sortedArray = quicksort(less) + pivot + quicksort(greater);
    return sortedArray;
}
console.log(quicksort([10, 5, 2, 3]));
