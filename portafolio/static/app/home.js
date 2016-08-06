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
                { href: red.bitbucket, className: "bitbucket", target: "_blank" },
                React.createElement("i", { className: "icon-bitbucket" })
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: red.facebook, className: "facebook", target: "_blank" },
                React.createElement("i", { className: "icon-facebook" })
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: red.github, className: "github", target: "_blank" },
                React.createElement("i", { className: "icon-github" })
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: red.youtube, className: "youtube", target: "_blank" },
                React.createElement("i", { className: "icon-youtube" })
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: red.linkedin, className: "linkedin", target: "_blank" },
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

      var skillList = skills.map(result => {

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
  app.ExperienciaReact = React.createClass({
    handleClick: function (id) {
      this.props.changeModal(id);
    },
    render: function () {
      return React.createElement(
        "div",
        { className: "exp", onClick: () => this.handleClick(this.props.data.id) },
        React.createElement(
          "div",
          { className: "descripcion" },
          React.createElement(
            "div",
            { className: "titulo-exp" },
            this.props.data.nombre
          ),
          React.createElement(
            "div",
            { className: "labor" },
            " ",
            React.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.data.trun_descripcion } })
          ),
          React.createElement(
            "div",
            { className: "periodo" },
            React.createElement(
              "span",
              { className: "inicio" },
              this.props.data.f_inicio
            ),
            React.createElement(
              "span",
              { className: "fin" },
              this.props.data.f_termino
            )
          )
        )
      );
    }
  });
  app.ModalReact = React.createClass({
    handleClick: function (id) {
      this.props.changeModal(id);
    },
    render: function () {
      var tag = "modal close";
      if (this.props.data.id == this.props.currentModal) {
        tag = tag + " open";
      }
      return React.createElement(
        "div",
        { className: tag },
        React.createElement("div", { className: "overlay", onClick: () => this.handleClick(0) }),
        React.createElement(
          "div",
          { className: "content" },
          React.createElement(
            "a",
            { href: this.props.data.url, target: "_blank" },
            React.createElement("img", { src: this.props.data.logo, height: "100" })
          ),
          React.createElement("span", { className: "close-modal icon-close", onClick: () => this.handleClick(0) }),
          React.createElement(
            "div",
            { className: "descripcion" },
            " ",
            React.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.data.descripcion } })
          )
        )
      );
    }
  });
  app.ExperienciaListReact = React.createClass({
    mixins: [getUrlMixin],
    getInitialState: function () {
      return {
        currentModal: 0
      };
    },
    changeModal: function (id) {
      console.log(id);
      this.setState({ currentModal: id });
    },

    render: function () {
      var experiencia = this.state.data;
      var experienciaList = experiencia.map(result => {
        return React.createElement(app.ExperienciaReact, { key: result.id, data: result, currentModal: this.state.currentModal, changeModal: this.changeModal });
      });
      var modalList = experiencia.map(modals => {
        return React.createElement(app.ModalReact, { key: modals.id, data: modals, currentModal: this.state.currentModal, changeModal: this.changeModal });
      });
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "cnt-general" },
          React.createElement(
            "h2",
            { className: "title" },
            "EXPERIENCIA"
          )
        ),
        React.createElement(
          "div",
          { className: "cnt-general" },
          React.createElement(
            "div",
            { className: "cnt-exp" },
            experienciaList
          ),
          React.createElement(
            "div",
            { className: "cnt-modal" },
            modalList
          )
        )
      );
    }
  });

  app.CategoriaReact = React.createClass({
    render: function () {
      return React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          { href: "", className: this.props.active },
          this.props.data.nombre
        )
      );
    }
  });
  app.ProyectoReact = React.createClass({
    render: function () {
      console.log(this.props.data.imagen);
      return React.createElement(
        "a",
        { className: "proyecto", href: this.props.data.url },
        React.createElement(
          "figure",
          null,
          React.createElement("img", { src: this.props.data.image, width: "300" })
        ),
        React.createElement(
          "h3",
          { className: "titulo-proyecto" },
          this.props.data.nombre
        ),
        React.createElement("div", { className: "capa" })
      );
    }

  });
  app.PortafolioReact = React.createClass({
    mixins: [getUrlMixin],

    render: function () {

      var proyectos = this.state.data;

      var proyectosList = proyectos.map(result => {
        return React.createElement(app.ProyectoReact, { key: result.id, data: result });
      });

      return React.createElement(
        "div",
        { className: "cnt-general" },
        React.createElement(
          "h2",
          { className: "title" },
          "Portafolio"
        ),
        React.createElement(
          "div",
          { className: "proyectos" },
          proyectosList
        )
      );
    }

  });
  ReactDOM.render(React.createElement(app.PresentacionRedesReact, { url: "/api/redes/" }), document.querySelector("#presentacion .cnt-general"));
  ReactDOM.render(React.createElement(app.PresentacionPerfilReact, { url: "/api/perfil/" }), document.getElementById("perfil-detalle"));
  ReactDOM.render(React.createElement(app.SkillListReact, { url: "/api/skills/" }), document.getElementById("mis-habilidades"));
  ReactDOM.render(React.createElement(app.ExperienciaListReact, { url: "/api/experiencias/" }), document.getElementById("experiencia"));
  ReactDOM.render(React.createElement(app.PortafolioReact, { url: "/api/proyectos/" }), document.getElementById("portafolio"));
})();