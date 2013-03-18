
define('ejs',[],function() {

	var fs = require.nodeRequire('fs'),

	fetchText = function (path, callback) {
		callback(fs.readFileSync(path, 'utf8'));
	};

	var EJS = {},
	buildMap = {};

	EJS.load = function(name, parentRequire, load, config) {
		var path = parentRequire.toUrl(name + '.ejs');

		fetchText(path, function(txt) {
			if (config.isBuild) {
				buildMap[name] = txt;
			}

			// load.fromText(name, txt);
			console.log(txt);
			load(txt);

			// parentRequire([name], function (value) {
			// 	load(value);
			// });
		});
	};

	EJS.write = function (pluginName, name, write) {
		if (buildMap.hasOwnProperty(name)) {
			var text = buildMap[name];
			write.asModule(pluginName + "!" + name, text);
		}
	};

	return EJS;

});
Hello World.;
require.config({
	"paths": {
		"ejs": "lib/ejs",
		"jquery": "lib/jquery"
	}
});

require(['ejs!test/init'], function() {});
define("test/app", function(){});
