
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end('Hello World!<br>Họ và tên: Nguyễn Anh Quân<br>Mã sinh viên: cdcntt18a23<br>Lớp: CĐ-CNTT18A');
}).listen(3000);
console.log('Server đang chạy tại http://localhost:3000');
