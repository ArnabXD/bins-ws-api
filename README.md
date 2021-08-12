# Bins-Ws-API (Unofficial)

This is an unofficial API to fetch data from [bins.ws](https://bins.ws)

```
Note: Although bins.ws looks similar to bins.su but I don't know if they have the same database or not.
```

## Deploy

| Deta | Heroku | Vercel |
|---|---|---|
| [![Deploy](https://button.deta.dev/1/svg)](https://go.deta.dev/deploy) | [![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy) | [![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/ArnabXD/bins-ws-api) |

## API

Send Get Request to `http://yourhost:port/api/{bin}`

## Example

Request to : `https://localhost:3000/api/439192`

Response : 

```json
{
  "result": true,
  "message": "Search Successful",
  "data": {
    "bin": "439192",
    "vendor": "VISA",
    "type": "CREDIT",
    "level": "PLATINUM",
    "bank": "KRUNGTHAI CARD PUBLIC CO., LTD.",
    "country": "THAILAND",
    "countryInfo": {
      "name": "THAILAND",
      "emoji": "🇹🇭",
      "unicode": "U+1F1F9 U+1F1ED",
      "code": "TH",
      "dialCode": "+66"
    }
  }
}
```

#### Errors :

```json
// No Results Found
{
  "result": false,
  "message": "No results found"
}

// Invalid Bin
{
  "result": false,
  "message": "Request a Valid BIN"
}
```


## Running Locally

```bash
$ git clone https://github.com/ArnabXD/bins-ws-api
$ cd bins-ws-api
$ npm install 
$ npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

