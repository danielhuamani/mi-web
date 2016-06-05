var app = app || {};

(function () {
  "use strict";

  var PresentacionReact = React.createClass({

    componentDidMount: function () {
      console.log("sada");
      console.log(this.props.redes.fetch());
    },
    render: function () {
      var red = this.props.redes;
      console.log("---------");
      console.log(this.props.redes.fetch());
      console.log(red);
      console.log(red.attributes);

      console.log(red.get("youtube"));
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
                { href: this.props.redes.get('bitbucket'), className: "bitbucket" },
                React.createElement("i", { className: "icon-bitbucket" })
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: this.props.redes.get("facebook"), className: "facebook" },
                React.createElement("i", { className: "icon-facebook" })
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: this.props.redes.get("github"), className: "github" },
                React.createElement("i", { className: "icon-github" })
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: youtube, className: "youtube" },
                React.createElement("i", { className: "icon-youtube" })
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: linkedin, className: "linkedin" },
                React.createElement("i", { className: "icon-linkedin2" })
              )
            )
          )
        )
      );
    }
  });
  ReactDOM.render(React.createElement(PresentacionReact, { redes: app.red }), document.querySelector("#presentacion .cnt-general"));
})();