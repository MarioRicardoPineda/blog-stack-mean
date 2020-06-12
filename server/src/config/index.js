
if ( process.env.NODE_ENV !== 'production' ) {
  require('dotenv').config()
}

module.exports = {

  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGODB_URI

}