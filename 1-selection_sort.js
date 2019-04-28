#!/usr/bin/node
/* implementation of Selection Sort in JavaScript */

function findSmallest(arr){

    let smallest = arr[0]; //stores the smallest value
    let smallest_index = 0; //stores the index of the smallest value

    for (let i = 0; i < arr.length; i++){
	if (arr[i] < smallest){
	    smallest = arr[i];
	    smallest_index = i;
	}
    }
    return smallest_index;
}

function selectionSort(arr){
    let newArr = [];
    let smallest = 0;

    for (let i = 0; i < arr.length; i++){
	smallest = findSmallest(arr);
	newArr.push(arr.pop(smallest));
    }
	return newArr;
}
