var fs = require("fs"),
path = require("path"),
url = require("url");

var folder = path.resolve(__dirname, "./");

module.exports ={
  port: 1337,
  browser: "chrome",
  middleware: [
	function (req, res, next) {
		var uri = url.parse(req.url);
		if (uri.pathname.length > 1 && !fs.existsSync(path.join(folder,uri.pathname)) && fs.existsSync(fs.existsSync(path.join(folder,uri.pathname,"index.html"))) ) {
			req.url = path.join(uri.pathname,"index.html",uri.search || '');
		}
		return next();
	}
  ]
}