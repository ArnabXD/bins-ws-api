// @ts-check
const express = require("express");
const { binLookup } = require("@arnabxd/bin-lookup");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/api/:bin", async (req, res) => {
  let data = await binLookup(req.params.bin, "bins.ws");
  res.set("Cache-Control", "public, max-age=86400");
  res.type("application/json");
  res.send(data);
});

app.use(async (_, res) => {
  res.redirect(301, "https://github.com/ArnabXD/bins-ws-api");
});

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

module.exports = app;
