let ogg1 = {}, ogg2 = { a: 1 };
function isEmpty(obj) {
    if (Object.keys(obj)[0]) return false;
    else return true;
}
console.log(isEmpty(ogg1), isEmpty(ogg2));
