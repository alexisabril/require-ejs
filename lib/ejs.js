define(function() {

	var EJS = {},
	buildMap = {};

	EJS.load = function(name, parentRequire, load, config) {
		var path = parentRequire.toUrl(name + '.ejs');

		if(config.isBuild) {
			var compiler = require.nodeRequire('can-compile');

			compiler.compile(path, function(error, output) {
				buildMap[name] = output;
				load(output);
			});
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