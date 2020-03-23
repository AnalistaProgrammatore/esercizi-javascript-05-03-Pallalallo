let user = {}
user.name = 'Mario';
Object.defineProperty(user, 'surname', { value: 'Rossi', enumerable: true });
user.name = 'Marco';
delete user.name;
console.log(user)