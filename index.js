module.exports = (d, format) => {
	monthAbbr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	return format
	.replace(/df-YYYY/g, d.getFullYear())
	.replace(/df-YY/g, String(d.getFullYear()).slice(-2))
	.replace(/df-MM/g, String(d.getMonth() + 1).length == 1 ? `0${d.getMonth() + 1}` : d.getMonth() + 1 )
	.replace(/df-dM/g, d.getMonth() + 1)
	.replace(/df-M/g, months[d.getMonth()])
	.replace(/df-m/g, monthAbbr[d.getMonth()])
}