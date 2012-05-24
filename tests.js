process.env['NODE_ENV'] = 'test'; // set env to testing so we can skip logging, etc.
process.env['PORT'] = '0'; // for testing bind ephemeral ports

const
should = require('should'),
http = require('http'),
net = require('net'),
webserver = require('./bin/keysigner');

var webPort = -1;

describe('the server', function() {
  it('should start up', function(done) {
    webserver(function(err, port) {
      should.not.exist(err);
      (port).should.be.ok
      webPort = port;
      done();
    });
  });
});

/*

describe('clearing email', function() {
  it('should work', function(done) {
    http.request({
      host: '127.0.0.1',
      port: webPort,
      path: '/mail/me',
      method: 'DELETE'
    }, function(res) {
      (res.statusCode).should.equal(200);
      done();
    }).end();
  });
});

describe('sending email', function() {
  it('should work', function(done) {
    var s = net.connect(emailPort, function(err) {
      should.not.exist(err);

      var response = "";
      s.on('data', function(chunk) { response += chunk; });

      s.on('end', function() {
        response.split('\r\n')[6].should.equal('221 Bye!');
        s.destroy();
        done();
      });

      s.end("helo\nmail from: <lloyd@localhost>\nrcpt to: <me@localhost>\ndata\nfrom: lloyd <lloyd@localhost>\nto: me <me@localhost>\n\nhi\n.\nquit\n");
    });
    setTimeout(function() { console.log('waited'); });
  });
});

describe('web apis', function() {
  it('should return mail', function(done) {
    http.request({
      host: '127.0.0.1',
      port: webPort,
      path: '/mail/me',
      method: 'GET'
    }, function(res) {
      (res.statusCode).should.equal(200);
      var data = "";
      res.on('data', function (chunk) { data += chunk; });
      res.on('end', function () {
        data = JSON.parse(data);
        data.length.should.equal(1);
        data = data[0];
        data.text.should.equal('hi\n');
        data.from[0].address.should.equal('lloyd@localhost');
        data.from[0].name.should.equal('lloyd');
        data.to[0].address.should.equal('me@localhost');
        data.to[0].name.should.equal('me');
        Object.keys(data.headers).length.should.equal(2);
        done();
      });
    }).end();
  });
});

describe('clearing email', function() {
  it('should work', function(done) {
    http.request({
      host: '127.0.0.1',
      port: webPort,
      path: '/mail/me',
      method: 'DELETE'
    }, function(res) {
      (res.statusCode).should.equal(200);
      done();
    }).end();
  });

  it('should cause GET to return zero mails', function(done) {
    http.request({
      host: '127.0.0.1',
      port: webPort,
      path: '/mail/me',
      method: 'GET'
    }, function(res) {
      (res.statusCode).should.equal(200);
      var data = "";
      res.on('data', function (chunk) { data += chunk; });
      res.on('end', function () {
        data = JSON.parse(data);
        data.length.should.equal(0);
        done();
      });
    }).end();
  });
});
*/