let word = {
    letters: ['a', 'l', 'l', 'e', 'l', 'u', 'i', 'a'],
    getWord() {
        return this.letters.reduce((prev, curr) => curr = prev.concat(curr), '');
    },
}

console.log(word.getWord());