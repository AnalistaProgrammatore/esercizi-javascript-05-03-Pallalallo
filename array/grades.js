
let nome = 'andrea';
let grades = {
    giorgio: [1, 2, 3],
    alessandro: [],
    andrea: [],
    getAverage(student) {
        return grades[student].reduce(((k, i) => i += k)) / grades[student].length;
    },
    addGrade(student, grade) {
        return grades[student] = grades[student].concat(grade);
    },
}
for (let j = 0; j < 10; j++) { grades.addGrade(nome, j) };

console.log(grades, grades.getAverage(nome))