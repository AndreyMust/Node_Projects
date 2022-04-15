// what does the function print?
async function getData() {
	return await Promise.resolve("Hello Prom");
}
const data =getData();
console.log(data);