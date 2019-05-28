const { test } = require('zora');
const df = require('./index');

const d = new Date(1559050001385)

test('Test for YYYY', t => {
	t.equal(
		df(d, 'YYYY'),
		'2019'
	)
})
test('Test for YY', t => {
	t.equal(
		df(d, 'YY'),
		'19'
	)
})