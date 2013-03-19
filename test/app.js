require.config({
	"paths": {
		"can": "../can",
		"ejs": "../lib/ejs",
		"jquery": "../lib/jquery"
	}
});

require(['can/util/library', 'ejs!init'], function(can, init) {

	var html = init({ foo: 'bar' });
	$('div').html(html);

});