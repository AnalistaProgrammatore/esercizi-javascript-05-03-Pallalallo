function smallest(array, grade) {
    if (array.length === 0) return null;
    let max = array[0], temp1 = array[0];
    //cerca il minimo e il secondo più piccolo
    for (i = 0; i < array.length; i++) {
        if (array[i] < temp1) temp1 = array[i];
        if (array[i] > max) max = array[i];
    }
    /*count serve a contare le occorrenze dei valori memorizzati 
    in temp1, che è l'nth valore più piccolo al ciclo n di while
    */
    let temp2 = max, temp3 = temp1, count = 0, i2 = 0;
    while (i2 < grade) {
        for (let i3 in array) {
            if (array[i3] > temp1 && array[i3] < temp2) temp2 = array[i3];
            if (array[i3] === temp1) count += 1;
        }
        temp3 = temp1;
        temp1 = temp2;
        temp2 = max;
        i2 += count;
        count = 0;
    }
    return temp3;
}

console.log(smallest([2, 3, 1, 4, 6, 1, 1, 4, 5], 0));
console.log(smallest([2, 3, 1, 4, 6, 1, 1, 4, 5], 1));
console.log(smallest([2, 3, 1, 4, 6, 1, 1, 4, 5], 2));
console.log(smallest([2, 3, 1, 4, 6, 1, 1, 4, 5], 3));
console.log(smallest([2, 3, 1, 4, 6, 1, 1, 4, 5], 4));
console.log(smallest([2, 3, 1, 4, 6, 1, 1, 4, 5], 5));
console.log(smallest([2, 3, 1, 4, 6, 1, 1, 4, 5], 6));
console.log(smallest([2, 3, 1, 4, 6, 1, 1, 4, 5], 7));
console.log(smallest([2, 3, 1, 4, 6, 1, 1, 4, 5], 8));
console.log(smallest([2, 3, 1, 4, 6, 1, 1, 4, 5], 9));