const ding1 = () => {
	return new Promise((resolve, reject) => {
		try {
			console.log('dink1')
			setTimeout(() => {
				console.log('ding1')
				resolve();
			}, 2000)
		}
		catch(err) {
			reject(err);
		}
	})
}

const ding2 = () => {
	return new Promise((resolve, reject) => {
		try {
			console.log('dink2')
			setTimeout(() => {
				console.log('ding2')
				resolve();
			}, 1000)
		}
		catch(err) {
			reject(err);
		}
	})
}

const ding3 = () => {
	return new Promise((resolve, reject) => {
		try {
			console.log('dink3')
			setTimeout(() => {
				console.log('ding3')
				resolve();
			}, 3000)
		}
		catch(err) {
			reject(err);
		}
	})
}

export { ding1, ding2, ding3 };