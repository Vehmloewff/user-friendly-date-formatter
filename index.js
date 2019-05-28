const days = {
	short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	abbr: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
}
const monthAbbr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const militaryHours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
const hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

module.exports = (d, format) => {
	return format
	.replace(/%YYYY/g, d.getFullYear())
	.replace(/%YY/g, String(d.getFullYear()).slice(-2))
	.replace(/%MM/g, String(d.getMonth() + 1).length == 1 ? `0${d.getMonth() + 1}` : d.getMonth() + 1 )
	.replace(/%M/g, d.getMonth() + 1)
	.replace(/%fMM/g, months[d.getMonth()])
	.replace(/%fM/g, monthAbbr[d.getMonth()])
	.replace(/%DD/, String(d.getDate()).length == 1 ? `0${d.getDate()}` : d.getDate() )
	.replace(/%D/g, d.getDate())
	.replace(/%ddd/g, days.en[d.getDay()])
	.replace(/%dd/g, days.abbr[d.getDay()])
	.replace(/%d/g, days.short[d.getDay()])
	.replace(/%H/g, militaryHours[d.getHours()])
	.replace(/%h/g, hours[d.getHours()])
	.replace(/%m/g, String(d.getMinutes()).length == 1 ? `0${d.getMinutes()}` : d.getMinutes() )
	.replace(/%s/g, String(d.getSeconds()).length == 1 ? `0${d.getSeconds()}` : d.getSeconds() )
	.replace(/%l/g, String(d.getMilliseconds()).length == 3 ? d.getMilliseconds() : String(d.getMilliseconds()).length == 1 ? `00${d.getMilliseconds()}` : `0${d.getMilliseconds()}` )
	.replace(/%a/g, d.getHours() >= 12 ? 'pm' : 'am' )
	.replace(/%t/g, d.getTime())
}