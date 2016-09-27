const Language = require( "./Language" );

module.exports = {
  postLanguage( req, res ) {
      new Language( req.body ).save( ( err, response ) => {
        if ( err ) {
          return res.status( 500 ).json( err );
        }

        return res.status( 201 ).json( response );
      } ); //.save() is required to tell Mongoose to make a new collection, language, and use the Language schema. Without .save(), new Language() would just create a new Javascript object and do nothing with it.
  }
  , getLanguages( req, res ) {
    Language.find( {}, ( err, response ) => {
      if ( err ) return res.status( 500 ).json( err );
      else return res.status( 200 ).json( response );
    } );
  }
  , getOneLanguage( req, res ) {
    Language.findById( req.params.id, ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( response );
    } );
  }
};
