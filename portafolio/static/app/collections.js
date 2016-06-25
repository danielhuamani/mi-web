
/*global Backbone */
var app = app || {};

(function () {
    'use strict';
    var RedesCollection = Backbone.Collection.extend({

        url: "/api/redes/",
        model: app.RedesModel,
        initialize: function(){
            console.log("iniciando la colecion");
        }
    })
    app.redes = new RedesCollection();
	var PerfilCollection = Backbone.Collection.extend({

        url: "/api/perfil/",
        model: app.PerfilModel,
        initialize: function(){
            console.log("iniciando la colecion perfil");
        }
    })
    app.perfil = new PerfilCollection();
    var SkillCollection = Backbone.Collection.extend({

        url: "/api/skills/",
        model: app.SkillModel,
        initialize: function(){
            console.log("iniciando la colecion skill");
        }
    })
    app.skill = new SkillCollection();
})();
