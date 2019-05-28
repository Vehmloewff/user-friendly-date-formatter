const { test } = require('zora');
const df = require('./index');

const d = new Date(1559050001385)
const later = new Date('2019-12-25');

test('Test for YYYY', t => {
	t.equal(
		df(d, 'df-YYYY'),
		'2019'
	)
})
test('Test for YY', t => {
	t.equal(
		df(d, 'df-YY'),
		'19'
	)
})
test('Test for M', t => {
	t.equal(
		df(d, 'df-M'),
		'May'
	)
	t.equal(
		df(later, 'df-M'),
		'December'
	)
})
test('Test for m', t => {
	t.equal(
		df(later, 'df-m'),
		'Dec'
	)
})
test('Test for MM', t => {
	t.equal(
		df(d, 'df-MM'),
		'05'
	)
	t.equal(
		df(later, 'df-MM'),
		'12'
	)
})
test('Test for dM', t => {
	t.equal(
		df(d, 'df-dM'),
		'5'
	)
	t.equal(
		df(later, 'df-dM'),
		'12'
	)
})