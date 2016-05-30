
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
    app.todos = new RedesCollection();

})();
