import * as Dingen from './dingen.js';

const promises = [
	Dingen.ding1(),
	Dingen.ding2(),
	Dingen.ding3(),
]

Promise.all(promises);

// niet de juiste volgorde