# Node-Express-Oracle Project   ![Version][version-image]

![Linux Build][linuxbuild-image]
![Windows Build][windowsbuild-image]
![NSP Status][nspstatus-image]
![Test Coverage][coverage-image]
![Dependency Status][dependency-image]
![devDependencies Status][devdependency-image]

The quickest way to get start with Node.Js & Express, just clone the project:

```bash
$ git clone https://github.com/arjunkhetia/Node.Js-Express-Project.git
```

Install dependencies:

```bash
$ npm install
```

Start Express.js app at `http://localhost:3000/`:

```bash
$ npm start
```

# Nodemon

Nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.

Start Express.js app with nodemon at `http://localhost:3000/`:

```bash
$ nodemon bin/www
```

# Logger - Morgan & Winston

Morgan - HTTP request logger middleware for node.js:

```js
var logger = require('morgan');
app.use(logger('dev'));
```

Winston - is designed to be a simple and universal logging library with support for multiple transports:

```js
var logger = require('winston');
```

# Rotating File Stream

To provide an automated rotation of Express/Connect logs or anything else that writes to a log on a regular basis that needs to be rotated based on date.

```js
var rfs    = require('rotating-file-stream');
var stream = rfs('file.log', {
    size:     '10M', // rotate every 10 MegaBytes written
    interval: '1d',  // rotate daily
    compress: 'gzip' // compress rotated files
});
```

# Oracle Database Connectivity (with connection pool)

The node-oracledb add-on for Node.js powers high performance Oracle Database applications. A Connection Pool is a cache of database connections maintained by your driver so that connections can be re-used when new connections to the database are required.

```js
var oracledb = require('oracledb');
oracledb.createPool({
    connectString: "127.0.0.1/XE", // The hostname of the database you are connecting to. (Default: localhost)
    user: "SYSTEM", // The PostgreSQL user to authenticate as.
    password: "oracle", // The password of that PostgreSQL user.
    poolMax: 10, // The maximum number of connections to which a connection pool can grow. (Default: 4)
    poolMin: 1, // The minimum number of connections a connection pool maintains, even when there is no activity to the target database. (Default: 1)
    poolIncrement: 1, // The number of connections that are opened whenever a connection request exceeds the number of currently open connections. (Default: 1)
    poolTimeout: 5, // The number of seconds after which idle connections (unused in the pool) may be terminated. Idle connections are terminated only when the pool is accessed. (Default: 60)
    poolPingInterval: 10, // When getConnection() is called and the connection has been idle in the pool for at least poolPingInterval seconds, an internal “ping” will be performed first to check the aliveness of the connection. (Default: 60)
    queueTimeout: 0 // The number of milliseconds after which connection requests waiting in the connection request queue are terminated. If queueTimeout is set to 0, then queued connection requests are never terminated. (Default: 60000)
}, function(err, pool) {
    if (err) {
      console.error("ERROR: ", new Date(), ": createPool() callback: " + err.message);
      return;
    } else {
      connectionPool = pool;
      console.log('Oracle Database connected...\n');
    }
});
```

[version-image]: https://img.shields.io/badge/Version-1.0.0-orange.svg
[linuxbuild-image]: https://img.shields.io/badge/Linux-passing-brightgreen.svg
[windowsbuild-image]: https://img.shields.io/badge/Windows-passing-brightgreen.svg
[nspstatus-image]: https://img.shields.io/badge/nsp-no_known_vulns-blue.svg
[coverage-image]: https://img.shields.io/coveralls/expressjs/express/master.svg
[dependency-image]: https://img.shields.io/badge/dependencies-up_to_date-brightgreen.svg
[devdependency-image]: https://img.shields.io/badge/devdependencies-up_to_date-yellow.svg
