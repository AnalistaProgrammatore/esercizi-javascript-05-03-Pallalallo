let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
function sumSalaries(salaries) {
    let curr = 0;
    for (let next of Object.keys(salaries)) {
        curr += salaries[next];
    };
    return curr;
}
console.log(sumSalaries(salaries));
