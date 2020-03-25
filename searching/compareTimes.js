let array1 = [];
for (let i = 0; i < 1000; i++) {
    array1[i] = Math.floor(Math.random() * 101);
};
function seqSearch(array, data) {
    for (let position = 0; position <= array.length - 1; position++) {
        if (array[position] = data) return position;
    }
    return -1;
}
function insertionsort(array) {
    let temp = 0, inner = 0;
    for (let outer in array) {
        temp = array[outer];
        inner = outer;
        while (inner > 0 && array[inner - 1] >= temp) {
            array[inner] = array[inner - 1];
            --inner;
        }
        array[inner] = temp;

    }
}
function binSearch(array, element) {
    let lowerBound = 0, upperBound = array.length - 1;
    while (lowerBound <= upperBound) {
        let mid = Math.floor((upperBound + lowerBound) / 2);
        if (array[mid] < element) lowerBound = mid + 1;
        else if (array[mid] > element) upperBound = mid - 1;
        else if (array[mid] = element) return mid;
    }
    return -1;
}
let start1 = new Date().getTime();
seqSearch(array1, 4);
let stop1 = new Date().getTime();
var start2 = new Date().getTime();
insertionsort(array1);
binSearch(array1, 4);
var stop2 = new Date().getTime();
console.log(array1, stop1 - start1, stop2 - start2);
//seqSearch ha una media di 0 millisecondi mentre la
//combinazione di IS e binSearch 8 millisecondi




