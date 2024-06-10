WebServer.prototype.constructor = function () {
console.log(`Web server running please go to: http://localhost:8000/`);
http.serve(http.serveFile("./dist/index.html"));
}
