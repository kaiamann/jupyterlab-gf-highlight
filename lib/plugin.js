import './gf'

export default [{
    id: 'jupyterlab-gf-highlight',
    autoStart: true,
    activate: function(app) {
      console.log('JupyterLab extension jupyterlab-gf-highlight is activated!');
      console.log(app.commands);
      registerGFFileType(app);
    }
}];

function registerGFFileType(app) {
  app.docRegistry.addFileType({
    name: 'GF',
    displayName: 'GF',
    extensions: ['gf'],
    mimeTypes: ['text/gf'],
  });
}
