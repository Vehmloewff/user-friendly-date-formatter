const { test } = require('zora');
const df = require('./index');

const d = new Date(1559066423330) // 5/28/19 at about 1:00:23 pm
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
test('Test for day', t => {
	t.equal(
		df(d, 'df-day'),
		'Tuesday'
	)
	t.equal(
		df(d, 'df-day-abbr'),
		'Tue'
	)
	t.equal(
		df(d, 'df-day-short'),
		'Tu'
	)
})
test('Test for hours', t => {
	t.equal(
		df(d, 'df-military-hour'),
		'13'
	)
	t.equal(
		df(d, 'df-hour'),
		'1'
	)
})
test('Test for minutes', t => {
	t.equal(
		df(d, 'df-minutes'),
		'00'
	)
})
test('Test for seconds', t => {
	t.equal(
		df(d, 'df-seconds'),
		'23'
	)
})
test('Test for milliseconds', t => {
	t.equal(
		df(d, 'df-milliseconds'),
		'330'
	)
})
test('Test for suffix', t => {
	t.equal(
		df(d, 'df-suffix'),
		'pm'
	)
})
test('Test for time', t => {
	t.equal(
		df(d, 'df-time'),
		'1559066423330'
	)
})
test('Test the date-formatter', t => {
	t.equal(
		df(d, 'df-month-abbr df-date, df-full-year at df-hour:df-minutes df-suffix'),
		'May 28, 2019 at 1:00 pm'
	)
})