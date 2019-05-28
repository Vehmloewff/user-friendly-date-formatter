const { test } = require('zora');
const df = require('./index');

const d = new Date(1559050001385)
const later = new Date('2019-12-25');
const earlier = new Date('2019-11-2');

test('Test for full year', t => {
	t.equal(
		df(d, 'df-full-year'),
		'2019'
	)
})
test('Test for two digit year', t => {
	t.equal(
		df(d, 'df-2-digit-year'),
		'19'
	)
})
test('Test for full month', t => {
	t.equal(
		df(d, 'df-full-month'),
		'May'
	)
	t.equal(
		df(later, 'df-full-month'),
		'December'
	)
})
test('Test for month abbr', t => {
	t.equal(
		df(later, 'df-month-abbr'),
		'Dec'
	)
})
test('Test for 2 digit month', t => {
	t.equal(
		df(d, 'df-2-digit-month'),
		'05'
	)
	t.equal(
		df(later, 'df-2-digit-month'),
		'12'
	)
})
test('Test for month number', t => {
	t.equal(
		df(d, 'df-month-number'),
		'5'
	)
	t.equal(
		df(later, 'df-month-number'),
		'12'
	)
})
test('Test for date', t => {
	t.equal(
		df(d, 'df-date'),
		'28'
	)
	t.equal(
		df(earlier, 'df-date'),
		'2'
	)
})
test('Test for 2 digit date', t => {
	t.equal(
		df(d, 'df-2-digit-date'),
		'28'
	)
	t.equal(
		df(earlier, 'df-2-digit-date'),
		'02'
	)
})