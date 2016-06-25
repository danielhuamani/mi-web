/*global Backbone */
var app = app || {};

(function () {
    'use strict';
    app.RedesModel = Backbone.Model.extend({
        url: "/api/redes/",
        defaults: {
             bitbucket: 'http://backbonejs.org/#Model-defaults',
             youtube: 'http://backbonejs.org/#Model-defaults',
             github: 'http://backbonejs.org/#Model-defaults',
             facebook: 'http://backbonejs.org/#Model-defaults',
             linkedin: 'http://backbonejs.org/#Model-defaults'
         },
        initialize: function(attr){
            console.log("se inciio el modelo");

        }

    });
    app.PerfilModel = Backbone.Model.extend({
        url: "/api/perfil/",
        defaults: {
             nombre: 'http://backbonejs.org/#Model-defaults',
             fecha_nacimiento: '1994-04-15',
             celular: '959459950',
             email: 'danielhuamani15@gmail.com',
             descripcion: 'descripcion',
             cv: '/media/curriculum-vitae_.pdf'
         },
        initialize: function(attr){
            console.log("se inciio el modelo perfil");

        }
    });
    app.SkillModel = Backbone.Model.extend({
        url: '/api/skills/',
        initialize: function(atrr){
            console.log("se inicio el modelo skill");
        }
    })
})();
