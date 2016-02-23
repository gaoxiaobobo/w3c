function learn (someting) {
	console.log(someting)
}
function we (callback,someting) {
	someting += ' is cool'
	callback(someting)
}
we(learn,'nodejs')

we(function (someting) {
	console.log(someting)
},'Jade')