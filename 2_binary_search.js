const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

function binarySearch(array, item) {
    let start = 0;
    let end = array.length - 1;
    let middle;
    let found = false;
    let position = -1;
    while (found === false && start <= end) {
        count++;
        middle = Math.floor((start + end) / 2);
        if (array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}

console.log('Линейный')
console.log(binarySearch(array, 11));
console.log('count =', count);
console.log('-------')

// O(log2n)

// -------------

const array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count2 = 0;

function recursionBinarySearch(array, item, start, end) {
    let middle = Math.floor((start + end) / 2);
    count2++;
    if (item === array[middle]) {
        return middle;
    }
    if (item < array[middle]) {
        return recursionBinarySearch(array, item, 0, middle - 1);
    } else {
        return recursionBinarySearch(array, item, middle + 1, end);
    }
}


console.log('Рекурсивный')
console.log(recursionBinarySearch(array2, 11, 0, array2.length));
console.log('count =', count2);
