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
            console.log(attr);
            console.log(attr.youtube)
        }

    });
})();
