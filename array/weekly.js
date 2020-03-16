function monthTemps() {
    this.dataStore = [];
    for (var i = 0; i <= 4; i++) {
        this.dataStore[i] = [];
    }
    this.weekAverage = weekAverage;
    this.averages = averages;
    this.add = add;
    this.monthAverage = monthAverage;
}

function add(temp, week, day) {
    this.dataStore[week - 1][day - 1] = temp
}


function monthAverage() {
    let avgs = this.averages();
    return +((avgs.reduce((p, c) => c += p, 0) / 4).toFixed(2));
}

function weekAverage(week) {
    total = 0; j = 0;
    while (j <= 6) {
        total += this.dataStore[week - 1][j];
        j++;
    }
    return +(total / j).toFixed(2);
}
function averages() {
    let avgs = [];
    avgs = avgs.concat(this.weekAverage(1), this.weekAverage(2), this.weekAverage(3), this.weekAverage(4))
    return avgs;
}
let thisMonth = new monthTemps;
thisMonth.add(13, 1, 1);
thisMonth.add(16, 1, 2);
thisMonth.add(12, 1, 3);
thisMonth.add(11, 1, 4);
thisMonth.add(19, 1, 5);
thisMonth.add(14, 1, 6);
thisMonth.add(18, 1, 7);
thisMonth.add(16, 2, 1);
thisMonth.add(13, 2, 2);
thisMonth.add(13, 2, 3);
thisMonth.add(18, 2, 4);
thisMonth.add(14, 2, 5);
thisMonth.add(17, 2, 6);
thisMonth.add(16, 2, 7);
thisMonth.add(11, 3, 1);
thisMonth.add(15, 3, 2);
thisMonth.add(17, 3, 3);
thisMonth.add(13, 3, 4);
thisMonth.add(19, 3, 5);
thisMonth.add(18, 3, 6);
thisMonth.add(15, 3, 7);
thisMonth.add(11, 4, 1);
thisMonth.add(15, 4, 2);
thisMonth.add(12, 4, 3);
thisMonth.add(20, 4, 4);
thisMonth.add(19, 4, 5);
thisMonth.add(18, 4, 6);
thisMonth.add(15, 4, 7);

console.log(thisMonth.weekAverage(1), thisMonth.averages(), thisMonth.monthAverage())