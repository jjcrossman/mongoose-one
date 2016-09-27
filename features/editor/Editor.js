const mongoose = require( "mongoose" );

const Editor = new mongoose.Schema( {
  name: {
    type: String
    , required: true
    , trim: true // removes leading and trailing whitespace
    , unique: true // check if other name of same name exists, don't allow duplicate
  }
  , free: {
    type: Boolean
    , required: true
  }
  , rating: {
    type: Number
    , default: 3
    , min: 0
    , max: 5
    , required: true
  }
  , autocomplete: {
    type: Boolean
    , required: true
  }
  , packages: {
    type: [
      {
        type: String
      }
    ]

  }
} );

module.exports = mongoose.model( "Editor", Editor );
