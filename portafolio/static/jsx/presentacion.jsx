var app = app || {};

(function () {
  "use strict";

  app.PresentacionRedesReact = React.createClass({

    render: function() {
      var red = this.props.redes;
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
                <a targe="_blank" href={bitbucket} className="bitbucket">
                  <i className="icon-bitbucket"></i>
                </a>
              </li>
              <li>
                <a targe="_blank" href={facebook} className="facebook">
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a targe="_blank" href={github} className="github">
                  <i className="icon-github"></i>
                </a>
              </li>
              <li>
                <a targe="_blank" href={youtube} className="youtube">
                  <i className="icon-youtube"></i>
                </a>
              </li>
              <li>
                <a targe="_blank" href={linkedin} className="linkedin">
                  <i className="icon-linkedin2"></i>
                </a>
              </li>
            </ul>

          </div>
        </div>
      );
    }
  });
  app.PresentacionPerfilReact = React.createClass({
    render: function(){
      var perfil = this.props.perfil;

      return (
        <div>

          <div className="descripcion">
            Jover estudiante de la universidad
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quis velit, dolores. Iusto culpa numquam quas ullam illum aliquam tempore corporis dolorum, perferendis, reprehenderit velit ea quasi, non pariatur eius.
          </div>
          <div className="detalle-avatar">
            <figure><img src="../../static/img/avatar.png" width="200"/></figure>
            <div className="detalle">
              <ul>
                <li><span>Nombre: </span> {perfil.get('nombre')}</li>
                <li><span>Fecha Nacimiento: </span> 15/04/1994</li>
                <li><span>Celular: </span> 959479450</li>
                <li><span>Email: </span> danielhuamani15@gmail.com</li>
              </ul>
              <div className="descargar-cv"><a href="" className="btn btn-primary">Descargar CV</a></div>
            </div>
            <div className="educacion">
              <h3 className="titulo-educacion">I.E.P Carlos Izaguirre</h3>
              <p>
                2005 - 2010
              </p>
              <h3 className="titulo-educacion">Universidad Nacional del Callao</h3>
              <p>2011 - 2016</p>
            </div>
          </div>
        </div>
      );
    }
  });
})();
