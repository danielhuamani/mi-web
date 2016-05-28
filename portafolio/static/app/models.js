"use strict";;
/*global Backbone */
var app = app || {};
var RedesModel = Backbone.Model.extend({
    url: "/api/perfil/",
    defaults: {
        bitbucket: 'http://backbonejs.org/#Model-defaults',
        youtube: 'http://backbonejs.org/#Model-defaults',
        github: 'http://backbonejs.org/#Model-defaults',
        facebook: 'http://backbonejs.org/#Model-defaults',
        linkedin: 'http://backbonejs.org/#Model-defaults'
    },
    initialize: function(attr){
        console.log("se inciio el modelo");
        console.log(attr);
        console.log(attr.youtube)
    }

});

// var red = new RedesModel();
