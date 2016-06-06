

/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	app.HomeView = Backbone.View.extend({
    	el: '#app',
		initialize: function(){
			console.log("incinado Home");
			app.redes.on('add', this.onAgregarRedes);
			app.perfil.on('add', this.onAgregarPerfil);
			app.redes.fetch();
			app.perfil.fetch();
		},
		onAgregarRedes: function(modelo, collection, options){
			ReactDOM.render(React.createElement(app.PresentacionRedesReact, { redes: modelo }), document.querySelector("#presentacion .cnt-general"));

		},
		onAgregarPerfil: function(modelo, collection, options){
			console.log(modelo)
			ReactDOM.render(React.createElement(app.PresentacionPerfilReact, { perfil: modelo }), document.getElementById("perfil-detalle"));

		}
	})
	app.PerfilView = Backbone.View.extend({
		initialize: function(){
			app.perfil
		}
	})
	app.homeview = new app.HomeView();
})();
