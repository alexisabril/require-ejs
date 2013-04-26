define(function() {
	var EJS = {},
	buildMap = {};

	EJS.load = function(name, parentRequire, load, config) {
		var path = parentRequire.toUrl(name + '.ejs'),
		filename = path.substring(path.lastIndexOf('/') + 1)

		if(config.isBuild) {
			var compiler = require.nodeRequire('can-compile');

			text = fs.readFileSync(path).toString(),
			id = filename.replace(/\./g, '_');

			var script = compiler.compileSync(path);

			load("can.view.preload('" + script + "," + filename.replace(/\.\//g, "_") + "')");
		}
		else {
			parentRequire(['can/view/ejs'], function(can) {
				load(can.view(path));
			});
		}
	};

	EJS.write = function (pluginName, name, write) {
		if (buildMap.hasOwnProperty(name)) {
			var text = buildMap[name];
			write.asModule(pluginName + "!" + name, text);
		}
	};

	return EJS;

});