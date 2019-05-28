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
	.replace(/df-full-year/g, d.getFullYear())
	.replace(/df-2-digit-year/g, String(d.getFullYear()).slice(-2))
	.replace(/df-2-digit-month/g, String(d.getMonth() + 1).length == 1 ? `0${d.getMonth() + 1}` : d.getMonth() + 1 )
	.replace(/df-month-number/g, d.getMonth() + 1)
	.replace(/df-full-month/g, months[d.getMonth()])
	.replace(/df-month-abbr/g, monthAbbr[d.getMonth()])
	.replace(/df-date/g, d.getDate())
	.replace(/df-2-digit-date/, String(d.getDate()).length == 1 ? `0${d.getDate()}` : d.getDate() )
	.replace(/df-day-abbr/g, days.abbr[d.getDay()])
	.replace(/df-day-short/g, days.short[d.getDay()])
	.replace(/df-day/g, days.en[d.getDay()])
	.replace(/df-military-hour/g, militaryHours[d.getHours()])
	.replace(/df-hour/g, hours[d.getHours()])
	.replace(/df-minutes/g, String(d.getMinutes()).length == 1 ? `0${d.getMinutes()}` : d.getMinutes() )
	.replace(/df-seconds/g, String(d.getSeconds()).length == 1 ? `0${d.getSeconds()}` : d.getSeconds() )
	.replace(/df-milliseconds/g, String(d.getMilliseconds()).length == 3 ? d.getMilliseconds() : String(d.getMilliseconds()).length == 1 ? `00${d.getMilliseconds()}` : `0${d.getMilliseconds()}` )
	.replace(/df-suffix/g, d.getHours() >= 12 ? 'pm' : 'am' )
	.replace(/df-time/g, d.getTime())
}