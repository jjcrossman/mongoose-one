const Editor = require( "./Editor.js" );

module.exports = {
  getEditors( req, res ) {
    Editor.find( {}, ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( response );
    } );
  }
  , getOneEditor( req, res ) {
    Editor.findById( req.params.id, ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( response );
    } );
  }
  , postEditor( req, res ) {
    new Editor( req.body ).save( ( err, response ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 201 ).json( response );
    } );
  }
  , updateEditor( req, res ) {
      Editor.findByIdAndUpdate( req.params.id, { $set: { rating: req.body.rating } }, ( err, response ) => {
        if ( err ) {
          return res.status( 500 ).json( err );
        }
        return res.status( 200 ).json( response );
      } );
  }
  , getEditorsByUserInput( req, res ) {
    Editor
      .find()
      .where( "rating" ).gte( parseInt( req.query.rating ) ) //gte means >=
      .where( "autocomplete" ).equals( true )
      .limit( 10 ) // if 500 editors match, only send back 10
      .sort( "rating" )
      .exec() // exec() means take everything before exec and execute it, like a promise
      .then( editors => { // then when the exec() promise completes, do this
        return res.status( 200 ).json( editors );
      } )
      .catch( err => {
        return res.status( 500 ).json( err );
      } );
  }
}
