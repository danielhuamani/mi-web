var app = app || {};

(function () {
  "use strict";

  var PresentacionReact = React.createClass({

    componentDidMount: function () {
      console.log("sada");
      console.log(this.props.redes.fetch());

    },
    render: function() {
      var red = this.props.redes;
      console.log("---------");
      console.log(this.props.redes.fetch());
      console.log(red);
      console.log(red.attributes);

      console.log(red.get("youtube"));
      var youtube = red.get("youtube")
      var bitbucket = red.get("bitbucket")
      var github = red.get("github")
      var facebook = red.get("facebook")
      var linkedin = red.get("linkedin")



      return (
        <div className="descripcion-web">
          <div className="page">
            <h2>
              Daniel Huamani
            </h2>
            <h3>
              Backend + Frontend
            </h3>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href={this.props.redes.get('bitbucket')} className="bitbucket">
                  <i className="icon-bitbucket"></i>
                </a>
              </li>
              <li>
                <a href={this.props.redes.get("facebook")} className="facebook">
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href={this.props.redes.get("github")} className="github">
                  <i className="icon-github"></i>
                </a>
              </li>
              <li>
                <a href={youtube} className="youtube">
                  <i className="icon-youtube"></i>
                </a>
              </li>
              <li>
                <a href={linkedin} className="linkedin">
                  <i className="icon-linkedin2"></i>
                </a>
              </li>
            </ul>

          </div>
        </div>
      );
    }
  });
  ReactDOM.render(
    <PresentacionReact redes={app.red} />,
    document.querySelector("#presentacion .cnt-general")
  );
})();
