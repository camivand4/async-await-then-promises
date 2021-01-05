import * as Dingen from './dingen.js';

const asyncFunction = async () => {
	try {
		await Dingen.ding1();
		await Dingen.ding2();
		await Dingen.ding3();
	} catch(err) {
		console.log(err);
	}
}

asyncFunction();