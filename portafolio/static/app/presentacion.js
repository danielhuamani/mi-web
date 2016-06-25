var app = app || {};

(function () {
  "use strict";

  app.PresentacionRedesReact = React.createClass({

    render: function () {
      var red = this.props.redes;
      var youtube = red.get("youtube");
      var bitbucket = red.get("bitbucket");
      var github = red.get("github");
      var facebook = red.get("facebook");
      var linkedin = red.get("linkedin");

      return React.createElement(
        "div",
        { className: "descripcion-web" },
        React.createElement(
          "div",
          { className: "page" },
          React.createElement(
            "h2",
            null,
            "Daniel Huamani"
          ),
          React.createElement(
            "h3",
            null,
            "Backend + Frontend"
          )
        ),
        React.createElement(
          "div",
          { className: "links" },
          React.createElement(
            "ul",
            null,
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { targe: "_blank", href: bitbucket, className: "bitbucket" },
                React.createElement("i", { className: "icon-bitbucket" })
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { targe: "_blank", href: facebook, className: "facebook" },
                React.createElement("i", { className: "icon-facebook" })
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { targe: "_blank", href: github, className: "github" },
                React.createElement("i", { className: "icon-github" })
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { targe: "_blank", href: youtube, className: "youtube" },
                React.createElement("i", { className: "icon-youtube" })
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { targe: "_blank", href: linkedin, className: "linkedin" },
                React.createElement("i", { className: "icon-linkedin2" })
              )
            )
          )
        )
      );
    }
  });
  app.PresentacionPerfilReact = React.createClass({
    render: function () {
      var perfil = this.props.perfil;
      var descripcion = perfil.get('descripcion');
      var nombre = perfil.get('nombre');
      var nacimiento = perfil.get('nacimiento');
      var celular = perfil.get('celular');
      var email = perfil.get('email');
      var cv = perfil.get('cv');
      console.log(descripcion);
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "descripcion" },
          React.createElement("div", { dangerouslySetInnerHTML: { __html: descripcion } })
        ),
        React.createElement(
          "div",
          { className: "detalle-avatar" },
          React.createElement(
            "figure",
            null,
            React.createElement("img", { src: "../../static/img/avatar.png", width: "200" })
          ),
          React.createElement(
            "div",
            { className: "detalle" },
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                React.createElement(
                  "span",
                  null,
                  "Nombre: "
                ),
                " ",
                nombre
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "span",
                  null,
                  "Fecha Nacimiento: "
                ),
                " ",
                nacimiento
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "span",
                  null,
                  "Celular: "
                ),
                " ",
                celular
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "span",
                  null,
                  "Email: "
                ),
                " ",
                email
              )
            ),
            React.createElement(
              "div",
              { className: "descargar-cv" },
              React.createElement(
                "a",
                { href: cv, target: "_blank", className: "btn btn-primary" },
                "Descargar CV"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "educacion" },
            React.createElement(
              "h3",
              { className: "titulo-educacion" },
              "I.E.P Carlos Izaguirre"
            ),
            React.createElement(
              "p",
              null,
              "2005 - 2010"
            ),
            React.createElement(
              "h3",
              { className: "titulo-educacion" },
              "Universidad Nacional del Callao"
            ),
            React.createElement(
              "p",
              null,
              "2011 - 2016"
            )
          )
        )
      );
    }
  });
  app.SKillReact = Reach.createClass({
    render: function () {
      return React.createElement(
        "div",
        { className: "skill" },
        React.createElement(
          "div",
          { className: "title-skill" },
          React.createElement(
            "span",
            null,
            React.createElement("i", { "class": "icon-html-five" })
          )
        )
      );
    }
  });
})();