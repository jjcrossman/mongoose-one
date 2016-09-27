const editorCtrl = require( "./editorCtrl.js" );

module.exports = app => {
  app.route( "/api/editor" )
    .get( editorCtrl.getEditors )
    .post( editorCtrl.postEditor );
  app.route( "/api/editor/by-rating" )
    .get( editorCtrl.getEditorsByUserInput );
  app.route( "/api/editor/:id" )
    .get( editorCtrl.getOneEditor )
    .put( editorCtrl.updateEditor );


}
