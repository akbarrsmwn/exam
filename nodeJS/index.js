// require memanggil library bawaan js dll
const http = require("http");
const host = "127.0.0.1";
const port = 3002;
// request adalah = data masuk dr luar
//response adalah= data keluar dari sistem
const server = http.createServer(function (request, response) {
  const nama = "akbarrsmwn";
  const panjang = 2;
  const lebar = 3;
  const rumus = panjang * lebar;
  const hasil = `hasil luas nya ${rumus} cm2 pak ${nama}`;

  response.statusCode = 200;
  response.end(hasil);
});

server.listen(port, host, "", function () {
  console.log(`server aktif di ${host}:${port}`);
});
