const express = require("express");
const app = express();

const port = 3000;

app.use(express.static(__dirname + "/app"));

(async () => {
  app.listen(port, () => {
    console.log(`> Ready at http://localhost:3000!`);
  });
})();
