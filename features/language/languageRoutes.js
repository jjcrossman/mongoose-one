const languageCtrl = require( "./languageCtrl.js" );

module.exports = app => {
  app.route( "/api/language" )
    .post( languageCtrl.postLanguage )
    .get( languageCtrl.getLanguages );
  app.route( "/api/language/:id" )
    .get( languageCtrl.getOneLanguage );
};
