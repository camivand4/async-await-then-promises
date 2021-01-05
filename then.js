import * as Dingen from './dingen.js';

Dingen.ding1()
	.then(() => Dingen.ding2())
	.then(() => Dingen.ding3())
	.catch((err) => console.log(err.message))