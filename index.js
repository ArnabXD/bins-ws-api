const express = require('express')
const app = express()
const { scrape } = require('./scraper')

const PORT = process.env.PORT || 3000

app.get('/api/:bin', async (req, res) => {
    let data = await scrape(req.params.bin);
    res.set("Cache-Control", "public, max-age=86400");
    res.type('application/json');
    res.send(data);
})

app.use(async (_, res) => {
    res.redirect(301, 'https://github.com/ArnabXD/bins-ws-api');
})

app.listen(PORT, () => console.log(`[Server]: Running ar PORT => ${PORT}`))

module.exports = app