const { test } = require('zora');
const df = require('./index');

const d = new Date(1559050001385)

test('Test for year', t => {
	t.equal(
		df(d, 'YYYY'),
		'2019'
	)
})