module.exports = (d, format) => {
	return format
	.replace(/YYYY/g, d.getFullYear())
}