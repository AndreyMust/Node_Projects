//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/await
//https://javascript.info/async-await
//https://learn.javascript.ru/async-await
//https://javascript.info/promise-basics
//file:///D:/Downloads/Node_JS/JavaScript/Выразительный%20JavaScript%20(Хавербеке).pdf

console.log("Работа с Await");

/*
async function getCompany() {
    return 'clairvoyant';
}
  
getCompany().then( (res) => {
    console.log('res-->', res);
})
getCompany();
*/


/*
function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(
                    () =>  resolve(x), 
                    3000);
    });
  }
  
  async function myFunc() {
    console.log("Start Timer..."); // 10      
    var x = await resolveAfter2Seconds("Hello Async!");
    console.log(x); // 10
  }
  myFunc();
  */

  
  function serverRequest() {
    var promise = new Promise( (resolve, reject) => {
        setTimeout(() => reject('Error in getting!'), 2000)
        setTimeout(() => resolve('Resolve ok'), 3000)
    })
    return promise;
}
  
async function getCompany() {
    let companyPromise = serverRequest();
    try{
        let companyName = await companyPromise;
        console.log('OK - ', companyName);
        // handle success
    } catch(error) {
        console.log('error:', error);
        // handle error
    }
}
getCompany();
