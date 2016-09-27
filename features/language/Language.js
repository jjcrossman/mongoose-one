const mongoose = require( "mongoose" );

const Language = new mongoose.Schema( {
  // do data validation in your schemas
  // name: String ...if name is not a string, throws an error
  name: {
    type: String // mongoose appears to use type coercion if name's value is not a string, it converted a number and a boolean to a string when tested.
    , required: true // name key's value must exist ( required: true ), and must be a String to be accepted. This is mongoose, doing this data validation.
  }
  , typeSafe: {
    type: Boolean
    , required: true
  }
  , version: {
    type: Number
    , default: 1 //if they didn't include a version, Mongoose will add one on for them.
  }
  , companiesUsing: [ { type: String } ]
  , intComp: {
    type: String
    , enum: [ "interpreted", "compiled", "ham" ] // enumerated. intComp can only be a string that is "interpreted" or "compiled" or "ham".
  }
  // IMPORTANT: Mongoose will only save keys that are specified in the Schema. If you pass extra properties, they will be ignored, and no error is generated. If you sent it name, and title props, it would ignore title and save name.
} );

module.exports = mongoose.model( "Language", Language );
// We are registering the schema, Language, with mongoose. It's called ( "Language", xxxx ), and here's the constructor ( "xxxx", Language )
