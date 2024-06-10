WebServer.prototype.constructor = function () {
  console.log(`Web server running please go to: http://localhost:8000/`);
  http.serve((req) => http.serveDir(req, { fsRoot: "./dist" }));
}
