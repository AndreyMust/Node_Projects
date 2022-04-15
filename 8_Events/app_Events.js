console.log("Работа с событиями");

const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}
const myEmitter = new MyEmitter()

//подписываемся на приъем события eventName
myEmitter.on('eventName', function(arg) {
    console.log('Event:', arg)
})

//создаем Событие
myEmitter.emit('eventName', 'foo');

//создаем Событие по таймеру
setTimeout(
    () => myEmitter.emit('eventName', 'bar')
    , 3000
)    


//подписываемся на приъем отднократного события
myEmitter.once('eventOnce', function(arg) {
    console.log('Event Once:', arg)
})

//создаем Событие
myEmitter.emit('eventOnce', 'AAA');
myEmitter.emit('eventOnce', 'BBB');


//подписываемся на приъем и обратку ошибок
myEmitter.once('error', err => {
    console.log('Event Error')
})

//создаем Событие по таймеру
setTimeout(
    () => myEmitter.emit('error', new Error('Is it Error from Timer'))
    , 5000
)    
