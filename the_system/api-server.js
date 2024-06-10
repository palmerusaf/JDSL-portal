APIServer.prototype.constructor = function () {
  console.log(`API server running at: http://localhost:7000/`);
  const msgs = []
  http.serve((req) => {
    console.log("you posted")
    req.json().then((msg) => msgs.push(msg))
    console.log({ msgs })
    return 200
  }, { port: 7000 });
  http.serve(() => {
    return new Response(JSON.stringify(msgs))
  }, { port: 7001 });
}
