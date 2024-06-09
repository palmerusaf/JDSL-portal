MyServer.prototype.constructor = function () {
  console.log(`API server running at: http://localhost:8080/`);
  http.serve((req) => {
    console.log({ req })
    if (req.method == "POST") {
      return new Response("you posted")
    }
    if (req.method == "GET") {
      return new Response("you requested")
    }
    return new Response("you did something else")
  }, { port: 8080 });
}
