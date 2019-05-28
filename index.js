module.exports = (d, format) => {
	monthAbbr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	return format
	.replace(/df-full-year/g, d.getFullYear())
	.replace(/df-2-digit-year/g, String(d.getFullYear()).slice(-2))
	.replace(/df-2-digit-month/g, String(d.getMonth() + 1).length == 1 ? `0${d.getMonth() + 1}` : d.getMonth() + 1 )
	.replace(/df-month-number/g, d.getMonth() + 1)
	.replace(/df-full-month/g, months[d.getMonth()])
	.replace(/df-month-abbr/g, monthAbbr[d.getMonth()])
}