require.config({
	"paths": {
		"can": "../can",
		"ejs": "../lib/ejs",
		"jquery": "../lib/jquery"
	}
});

require(['can/util/library', 'can/view/ejs', 'ejs!init'], function() {

	var div = $('<div>');
	div.html(can.view('init.ejs', {}));

	$('body').append(div);

});