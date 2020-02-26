/* 检测值及对应的content-type值 */
let items = [
	{
		reg: /\.html$/,
		contentType: 'text/html;charset=utf-8'
	},
	{
		reg: /\.css$/,
		contentType: 'text/css;charset=utf-8'
	},
	{
		reg: /\.js$/,
		contentType: 'application/javascript;charset=utf-8'
	},
	{
		reg: /\.json$/,
		contentType: 'application/json;charset=utf-8'
	},
	{
		reg: /\.txt$/,
		contentType: 'text/plain;charset=utf-8'
	},
	{
		reg: /\.(jpeg|jpg|png|dif|bmp|webp|x\-icon)$/i,
		contentType: 'image/*'
	},
	{
		reg: /\.(mp3|ogg|mpeg|webm|wav|midi)$/i,
		contentType: 'audio/*'
	},
	{
		reg: /\.(mp4|webm|ogg)$/i,
		contentType: 'video/*'
	}
];



module.exports = function ContentType(url) {
	let item = items.find(item => item.reg.test(url));
	return item ? item.contentType : '';
};
