const { test } = require('zora');
const df = require('./index');

const d = new Date(1559066423330) // 5/28/19 at about 1:00:23 pm
const later = new Date('2019-12-25');
const earlier = new Date('2019-11-2');

test('Test for full year', t => {
	t.equal(
		df(d, '%YYYY'),
		'2019'
	)
})
test('Test for two digit year', t => {
	t.equal(
		df(d, '%YY'),
		'19'
	)
})
test('Test for full month', t => {
	t.equal(
		df(d, '%fMM'),
		'May'
	)
	t.equal(
		df(later, '%fMM'),
		'December'
	)
})
test('Test for month abbr', t => {
	t.equal(
		df(later, '%fM'),
		'Dec'
	)
})
test('Test for 2 digit month', t => {
	t.equal(
		df(d, '%MM'),
		'05'
	)
	t.equal(
		df(later, '%MM'),
		'12'
	)
})
test('Test for month number', t => {
	t.equal(
		df(d, '%M'),
		'5'
	)
	t.equal(
		df(later, '%M'),
		'12'
	)
})
test('Test for date', t => {
	t.equal(
		df(d, '%D'),
		'28'
	)
	t.equal(
		df(earlier, '%D'),
		'2'
	)
})
test('Test for 2 digit date', t => {
	t.equal(
		df(d, '%DD'),
		'28'
	)
	t.equal(
		df(earlier, '%DD'),
		'02'
	)
})
test('Test for day', t => {
	t.equal(
		df(d, '%ddd'),
		'Tuesday'
	)
	t.equal(
		df(d, '%dd'),
		'Tue'
	)
	t.equal(
		df(d, '%d'),
		'Tu'
	)
})
test('Test for hours', t => {
	t.equal(
		df(d, '%H'),
		'13'
	)
	t.equal(
		df(d, '%h'),
		'1'
	)
})
test('Test for minutes', t => {
	t.equal(
		df(d, '%m'),
		'00'
	)
})
test('Test for seconds', t => {
	t.equal(
		df(d, '%s'),
		'23'
	)
})
test('Test for milliseconds', t => {
	t.equal(
		df(d, '%l'),
		'330'
	)
})
test('Test for suffix', t => {
	t.equal(
		df(d, '%a'),
		'pm'
	)
})
test('Test for time', t => {
	t.equal(
		df(d, '%t'),
		'1559066423330'
	)
})
test('Test the date-formatter', t => {
	t.equal(
		df(d, '%fM %D, %YYYY at %h:%m %a'),
		'May 28, 2019 at 1:00 pm'
	)
})