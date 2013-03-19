require.config({
	"paths": {
		"can": "../can",
		"ejs": "../lib/ejs",
		"jquery": "../lib/jquery"
	}
});

require(['can/util/library', 'can/view/ejs', 'ejs!init'], function(can, EJS, init) {

	var html = init({ foo: 'bar' });
	$('div').html(html);

});