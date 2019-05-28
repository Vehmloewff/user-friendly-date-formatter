module.exports = (d, format) => {
	return format
	.replace(/YYYY/g, d.getFullYear())
	.replace(/YY/g, String(d.getFullYear()).slice(-2))
}