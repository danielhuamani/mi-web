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

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "descripcion" },
          "Jover estudiante de la universidad Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quis velit, dolores. Iusto culpa numquam quas ullam illum aliquam tempore corporis dolorum, perferendis, reprehenderit velit ea quasi, non pariatur eius."
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
                perfil.get('nombre')
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "span",
                  null,
                  "Fecha Nacimiento: "
                ),
                " 15/04/1994"
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "span",
                  null,
                  "Celular: "
                ),
                " 959479450"
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "span",
                  null,
                  "Email: "
                ),
                " danielhuamani15@gmail.com"
              )
            ),
            React.createElement(
              "div",
              { className: "descargar-cv" },
              React.createElement(
                "a",
                { href: "", className: "btn btn-primary" },
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
})();