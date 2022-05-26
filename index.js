// @ts-check
const express = require("express");
// const { binLookup } = require("@arnabxd/bin-lookup");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/api/:bin", async (req, res) => {
  // let data = await binLookup(req.params.bin, "bins.ws");
  res.set("Cache-Control", "public, max-age=86400");
  res.type("application/json");
  res.send({
    result: false,
    message: "Deploy your own API instead of abusing...",
  });
});

app.use(async (_, res) => {
  res.redirect(301, "https://github.com/ArnabXD/bins-ws-api");
});

app.listen(PORT, () => console.log(`[Server]: Running ar PORT => ${PORT}`));

module.exports = app;
