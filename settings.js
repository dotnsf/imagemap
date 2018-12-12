exports.db_username = 'b612b8b5-b4bb-4676-90c3-e0b6a45a639c-bluemix';
exports.db_password = '5a6a44e811acbb8ce2bc65d734d78826aa0cd6e06133cc12913ab3f4310fa15c';
exports.db_name = 'imagemapdb';

exports.app_port = 0;

if( process.env.VCAP_SERVICES ){
  var VCAP_SERVICES = JSON.parse( process.env.VCAP_SERVICES );
  if( VCAP_SERVICES && VCAP_SERVICES.cloudantNoSQLDB ){
    exports.db_username = VCAP_SERVICES.cloudantNoSQLDB[0].credentials.username;
    exports.db_password = VCAP_SERVICES.cloudantNoSQLDB[0].credentials.password;
  }
}
