var app = app || {};

(function () {
  "use strict";
  var getUrlMixin = {
    getInitialState: function() {
      return {data: []};
    },
    componentDidMount: function() {
      // this.loadCommentsFromServer();
      $.get(this.props.url, function (result) {
        this.setState({data: result});
      }.bind(this));

    },
  }
  app.PresentacionRedesReact = React.createClass({

    mixins: [getUrlMixin],
    render: function() {
      var red = this.state.data;


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
                <a href={red.bitbucket} className="bitbucket" target="_blank">
                  <i className="icon-bitbucket"></i>
                </a>
              </li>
              <li>
                <a href={red.facebook} className="facebook" target="_blank">
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href={red.github} className="github" target="_blank">
                  <i className="icon-github"></i>
                </a>
              </li>
              <li>
                <a href={red.youtube} className="youtube" target="_blank">
                  <i className="icon-youtube"></i>
                </a>
              </li>
              <li>
                <a href={red.linkedin} className="linkedin" target="_blank">
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
    mixins: [getUrlMixin],
    render: function(){
      var perfil = this.state.data;
      return (
        <div>

          <div className="descripcion">
            <div dangerouslySetInnerHTML={{__html: perfil.descripcion}} />
          </div>
          <div className="detalle-avatar">
            <figure><img src="../../static/img/avatar.png" width="200"/></figure>
            <div className="detalle">
              <ul>
                <li><span>Nombre: </span> {perfil.nombre}</li>
                <li><span>Fecha Nacimiento: </span> {perfil.nacimiento}</li>
                <li><span>Celular: </span> {perfil.celular}</li>
                <li><span>Email: </span> {perfil.email}</li>
              </ul>
              <div className="descargar-cv"><a href={perfil.cv} target="_blank" className="btn btn-primary">Descargar CV</a></div>
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
  app.SkillReact = React.createClass({

    render: function(){
      var percentage = this.props.data.porcentaje + '%';
      return(
        <div className="skill">
          <div className="title-skill" style={{width : percentage}} >
            <span>
              <i className={this.props.data.icon}></i>
              {this.props.data.nombre} - {percentage}
            </span>
          </div>
        </div>
      )
    }
  });
  app.SkillListReact = React.createClass({
    mixins: [getUrlMixin],
    render: function(){
      var skills = this.state.data;

      var skillList = skills.map(result => {

        return (
          <app.SkillReact key={result.id} data={result} />
        );
      });
      return(
        <div>
          <h2 className="title">
            MIS HABLIDADES
          </h2>
          <div className="cnt-skill">
             {skillList}
          </div>
        </div>
      )
    }
  });
  app.ExperienciaReact = React.createClass({
    render: function(){
      return(
        <a href="" className="exp">
          <div className="descripcion">
            <div className="titulo-exp">{this.props.data.nombre}</div>
            <div className="labor"> <div dangerouslySetInnerHTML={{__html: this.props.data.trun_descripcion}} /></div>
            <div className="periodo"><span className="inicio">{this.props.data.f_inicio}</span><span className="fin">{this.props.data.f_termino}</span></div>
          </div>
        </a>
      )
    }
  })
  app.ExperienciaListReact = React.createClass({
    mixins: [getUrlMixin],
    render: function(){
      var experiencia = this.state.data
      var experienciaList = experiencia.map(result => {
        return(
          <app.ExperienciaReact key={result.id} data={result} />
        );
      });
      return (
        <div>
          <div className="cnt-general">
            <h2 className="title">EXPERIENCIA</h2>
          </div>
          <div className="cnt-general">
            <div className="cnt-exp">
              {experienciaList}
            </div>
          </div>
        </div>
      )
    }
  })

  app.CategoriaReact = React.createClass({
    render: function(){
      return(
        <li>
          <a href="" className={this.props.active}>
            {this.props.data.nombre}
          </a>
        </li>
      )
    }
  })
  app.ProyectoReact = React.createClass({
    render: function(){
      console.log(this.props.data.imagen);
      return(
        <a className="proyecto" href={this.props.data.url}>
          <figure><img src={this.props.data.image} width="300" /></figure>
          <h3 className="titulo-proyecto">{this.props.data.nombre}</h3>
          <div className="capa"></div>
        </a>
      )
    }

  })
  app.PortafolioReact = React.createClass({
    mixins: [getUrlMixin],

    render: function(){

      var proyectos = this.state.data;

      var proyectosList = proyectos.map(result => {
        return(
            <app.ProyectoReact key={result.id} data={result} />
        );

      });

      return(
        <div className="cnt-general">
            <h2 className="title">Portafolio</h2>
          <div className="proyectos">
            {proyectosList}
          </div>
        </div>

        )
    }

  })
  ReactDOM.render(
    <app.PresentacionRedesReact url="/api/redes/" />,
    document.querySelector("#presentacion .cnt-general")
  );
  ReactDOM.render(
    <app.PresentacionPerfilReact url="/api/perfil/" />,
    document.getElementById("perfil-detalle")
  );
  ReactDOM.render(
    <app.SkillListReact url="/api/skills/" />,
    document.getElementById("mis-habilidades")
  );
  ReactDOM.render(
    <app.ExperienciaListReact url="/api/experiencias/" />,
    document.getElementById("experiencia")
  );
  ReactDOM.render(
    <app.PortafolioReact url="/api/proyectos/" />,
    document.getElementById("portafolio")
  )
})();
