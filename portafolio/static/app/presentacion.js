var app = app || {};
console.log(app);
console.log("---");
(function () {
  "use strict";
  // var BackboneMixin = {
  //   componentDidMount: function () {
  //     // Whenever there may be a change in the Backbone data, trigger a
  //     // reconcile.
  //     this.getBackboneCollections().forEach(function (collection) {
  //       // explicitly bind `null` to `forceUpdate`, as it demands a callback and
  //       // React validates that it's a function. `collection` events passes
  //       // additional arguments that are not functions
  //       collection.on('add remove change', this.forceUpdate.bind(this, null));
  //     }, this);
  //   },

  //   componentWillUnmount: function () {
  //     // Ensure that we clean up any dangling references when the component is
  //     // destroyed.
  //     this.getBackboneCollections().forEach(function (collection) {
  //       collection.off(null, null, this);
  //     }, this);
  //   }
  // };


  var PresentacionReact = React.createClass({
    // mixins: [BackboneMixin],
    getBackboneCollections: function () {
      return [this.props.redes];
    },

    componentDidMount: function () {


      this.props.redes.fetch();
    },
    componentDidUpdate: function () {
      // If saving were expensive we'd listen for mutation events on Backbone and
      // do this manually. however, since saving isn't expensive this is an
      // elegant way to keep it reactively up-to-date.
      this.props.redes.forEach(function (todo) {
        todo.save();
      });
    },
    render: function() {
      var redes = this.props.redes;
      console.log("test");
      console.log(redes);
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
                <a href="" className="bitbucket">
                  <i href="" className="icon-bitbucket"></i>
                </a>
              </li>
              <li>
                <a href="" className="facebook">
                  <i href="" className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="" className="github">
                  <i href="" className="icon-github"></i>
                </a>
              </li>
              <li>
                <a href="" className="youtube">
                  <i href="" className="icon-youtube"></i>
                </a>
              </li>
              <li>
                <a href="" className="linkedin">
                  <i href="" className="icon-linkedin2"></i>
                </a>
              </li>
            </ul>

          </div>
        </div>
      );
    }
  });
  ReactDOM.render(
    <PresentacionReact redes={app.todos} />,
    document.querySelector("#presentacion .cnt-general")
  );
})();
