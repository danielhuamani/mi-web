var app = app || {};

(function () {
	app.Rutas = Backbone.Router.extend({
		routes: {
			'/': 'home'
		},
		home: function(){
			console.log("tos");
		}
	});
	var rutas = new app.Rutas();
	Backbone.history.start();
	Backbone.history.navigate('home', {trigger: true});
})();
