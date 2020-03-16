
let array = [], forward = [], backward = [];
for (i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 10);
}
for (let j in array) {
    forward += array[j];
}
for (j = array.length - 1; j >= 0; j--) {
    backward += array[j];
}
console.log('forward array:', forward, 'backward array:', backward)