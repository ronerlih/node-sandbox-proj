const express = require("express");

const PORT = 3000;

const server = express();

server.get("/", handleHome);

server.get("/api", handleData);

server.listen(PORT, () => {
   console.log(`🌎 node server listening on port http://localhost:${PORT}`);
});

function handleHome(req, res) {
   
   res.send("<h1> hello 🌎</h1>");

   console.info('recieved a ' + req.method + ' request to the home route')
}
      
function handleData(req, res) {
   res.json("<h1> hello 🌎</h1>");
   console.info('recieved a ' + req.method + ' request to the api route')

}
      