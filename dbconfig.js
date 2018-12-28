var oracledb = require('oracledb');

var connectionPool = null;

oracledb.createPool({
    user:             "SYSTEM",
    password:         "oracle",
    connectString:    "127.0.0.1/XE",
    poolMax:          10,
    poolMin:          1,
    poolIncrement:    1,
    poolTimeout:      5
}, function(err, pool) {
    if (err) {
      console.error("ERROR: ", new Date(), ": createPool() callback: " + err.message);
      return;
    } else {
      connectionPool = pool;
      console.log('Oracle Database connected...\n');
    }
});

var executequery = (query) =>
  new Promise((resolve, reject) =>
  connectionPool.getConnection(function(connectionErr, connection) {
    if (connectionErr) {
      console.error("ERROR: Cannot get a connection: ", connectionErr);
      reject;
    }
    if (typeof connectionPool !== "undefined") {
      console.log("INFO: Connections open: " + connectionPool.connectionsOpen);
      console.log("INFO: Connections in use: " + connectionPool.connectionsInUse);
    }
    connection.execute(query, function(executeErr, result) {
      if (executeErr) {
        console.error(executeErr.message);
        releaseConnection(connection);
        reject;
      }
      releaseConnection(connection);
      resolve(result.rows);
    })
  })
);

function releaseConnection(connection) {
  connection.close(
    function(err) {
      if (err)
        console.error(err.message);
    });
}

module.exports.execute = (query) => {
  return executequery(query);
}

module.exports.close = () => {
  connectionPool.close();
}
