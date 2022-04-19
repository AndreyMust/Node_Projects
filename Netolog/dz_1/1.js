const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

var now = new Date();
console.log(now);

console.log(argv)
if (argv._.includes('current')) {
    if ((argv.y) || (argv.year)) {
        console.log('God:', now.getFullYear());        
    }
    if ((argv.m) || (argv.month)) {
        console.log('month:', now.getMonth());
    }
    if ((argv.d) || (argv.date)) {
        console.log('date:', now.getDate());
    }
}

if (argv._.includes('add')) {
    if (argv.d) {
        var d = new Date();
        d.setMonth(now.getMonth() + argv.d);
        console.log('date add:', d);
    }
    if (argv.m) {
        var m = new Date();
        m.setMonth(now.getMonth() + argv.m);
        console.log('Month add:', m);
    }
}

if (argv._.includes('sub')) {
    if (argv.d) {
        var d = new Date();
        d.setDate(now.getDate() - argv.d);
        console.log('date sub:', d);
    }
    if (argv.m) {
        var m = new Date();
        m.setMonth(now.getMonth() - argv.m);
        console.log('Month sub', m);
    }
}