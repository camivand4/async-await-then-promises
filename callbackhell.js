const ding1 = (callback) => setTimeout(callback, 2000);
const ding2 = (callback) => setTimeout(callback, 3000);
const ding3 = (callback) => setTimeout(callback, 1000);

console.log('hello world');
ding1(() => {
	console.log('ja hallo');
	console.log('man man man');
	ding2(() => {
		console.log('appeltje voor de dorst')
		console.log('peertje voor de dorst')
		ding3(() => {
			console.log('worst')
			console.log('tierlantijn')
		})
	})
})