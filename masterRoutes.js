const languageRoutes = require( "./features/language/languageRoutes.js" );
const editorRoutes = require( "./features/editor/editorRoutes.js" );

module.exports = app => {
  languageRoutes( app );
  editorRoutes( app );
};
