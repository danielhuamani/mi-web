var app = app || {};

(function () {
  "use strict";

  var getUrlMixin = {
    getInitialState: function () {
      return { data: [] };
    },
    componentDidMount: function () {
      // this.loadCommentsFromServer();
      $.get(this.props.url, function (result) {
        this.setState({ data: result });
      }.bind(this));
    }
  };
  app.PresentacionRedesReact = React.createClass({

    mixins: [getUrlMixin],
    render: function () {
      var red = this.state.data;

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
                { targe: "_blank", href: red.bitbucket, className: "bitbucket" },
                React.createElement("i", { className: "icon-bitbucket" })
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { targe: "_blank", href: red.facebook, className: "facebook" },
                React.createElement("i", { className: "icon-facebook" })
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { targe: "_blank", href: red.github, className: "github" },
                React.createElement("i", { className: "icon-github" })
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { targe: "_blank", href: red.youtube, className: "youtube" },
                React.createElement("i", { className: "icon-youtube" })
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { targe: "_blank", href: red.linkedin, className: "linkedin" },
                React.createElement("i", { className: "icon-linkedin2" })
              )
            )
          )
        )
      );
    }
  });

  app.PresentacionPerfilReact = React.createClass({
    mixins: [getUrlMixin],
    render: function () {
      var perfil = this.state.data;
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "descripcion" },
          React.createElement("div", { dangerouslySetInnerHTML: { __html: perfil.descripcion } })
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
                perfil.nombre
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
                perfil.nacimiento
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
                perfil.celular
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
                perfil.email
              )
            ),
            React.createElement(
              "div",
              { className: "descargar-cv" },
              React.createElement(
                "a",
                { href: perfil.cv, target: "_blank", className: "btn btn-primary" },
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
  app.SkillReact = React.createClass({

    render: function () {
      var percentage = this.props.data.porcentaje + '%';
      return React.createElement(
        "div",
        { className: "skill" },
        React.createElement(
          "div",
          { className: "title-skill", style: { width: percentage } },
          React.createElement(
            "span",
            null,
            React.createElement("i", { className: this.props.data.icon }),
            this.props.data.nombre,
            " - ",
            percentage
          )
        )
      );
    }
  });
  app.SkillListReact = React.createClass({
    mixins: [getUrlMixin],
    render: function () {
      var skills = this.state.data;

      var skillList = skills.map(function (result) {

        return React.createElement(app.SkillReact, { key: result.id, data: result });
      });
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          { className: "title" },
          "MIS HABLIDADES"
        ),
        React.createElement(
          "div",
          { className: "cnt-skill" },
          skillList
        )
      );
    }
  });
  ReactDOM.render(React.createElement(app.PresentacionRedesReact, { url: "/api/redes/" }), document.querySelector("#presentacion .cnt-general"));
  ReactDOM.render(React.createElement(app.PresentacionPerfilReact, { url: "/api/perfil/" }), document.getElementById("perfil-detalle"));
  ReactDOM.render(React.createElement(app.SkillListReact, { url: "/api/skills/" }), document.getElementById("mis-habilidades"));
})();