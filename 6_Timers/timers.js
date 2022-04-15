exports.myTimer = function(){
/*
setTimeout( function(str_name) {
                console.log('Hello ', str_name)
            }, 2000, 'Andrew');
*/

    //setTimeout(() => console.log('Hello Andrew'), 2000)
    setTimeout((str_name) => console.log('Hello ', str_name), 2000,'Andrew');
    console.log('Waiting on timer...');

    console.log('Console before immediate');
    setImmediate(() => console.log('Immediate execution'))
    console.log('Console after immediate');

    //setInterval(() => console.log('Interval execution'), 1000);

}