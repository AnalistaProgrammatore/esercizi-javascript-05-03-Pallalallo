let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

const multiplyNumeric = function (menu, factor) {
    let newMenu = {};
    for (let key of Object.keys(menu)) {
        if ((typeof (menu[key]) === "number")) {
            newMenu[key] = menu[key] * factor;
        }
        else {
            newMenu[key] = menu[key];
        };
    };
    return newMenu;
}

let newMenu = multiplyNumeric(menu, 2)
console.log(newMenu);
