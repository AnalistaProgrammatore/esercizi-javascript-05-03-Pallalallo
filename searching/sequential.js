function searchLastElem(array, data) {
    for (let position = array.length - 1; position >= 0; position--) {
        if (array[position] = data) return position + 1;
    }
    return -1;
}
let array = [1, 5, 6, 1, 2, 5];
console.log(searchLastElem(array, 5));