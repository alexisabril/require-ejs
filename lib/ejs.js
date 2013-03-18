define(function() {

	// var fs = require.nodeRequire('fs'),
	// compiler = require.nodeRequire('can-compile'),

	// fetchText = function (path, callback) {
	// 	callback(fs.readFileSync(path, 'utf8'));
	// };

	var EJS = {},
	buildMap = {};

	EJS.load = function(name, parentRequire, load, config) {
		var path = parentRequire.toUrl(name + '.ejs'),

		fetchText = function (url, callback) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', url, true);
			xhr.onreadystatechange = function (evt) {
				//Do not explicitly handle errors, those should be
				//visible via console output in the browser.
				if (xhr.readyState === 4) {
					callback(xhr.responseText);
				}
			};

			xhr.send(null);
		};

		fetchText(path, function(txt) {
			// load.fromText(name, txt);

			// parentRequire([name], function(value) {
			// 	load(value);
			// });
			load(txt);
		});

		// compiler.compile(path, function(error, output) {
		// 	console.log('Error: ', error);
		// 	console.log('Output: ', output);

		// 	load(output);
		// });

		// fetchText(path, function(txt) {
		// 	if (config.isBuild) {
		// 		buildMap[name] = txt;
		// 	}

		// 	load.fromText(name, txt);
		// 	load(txt);

		// 	parentRequire([name], function (value) {
		// 		load(value);
		// 	});
		// });
	};

	EJS.write = function (pluginName, name, write) {
		if (buildMap.hasOwnProperty(name)) {
			var text = buildMap[name];
			write.asModule(pluginName + "!" + name, text);
		}
	};

	return EJS;

});