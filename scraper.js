const axios = require('axios');
const cheerio = require('cheerio');
const alpha2 = require('iso-3166-1-alpha-2')
const emojiFlag = require('emoji-flags');

const fetchHtml = async (bin) => {
    let response = await axios.get(`https://bins.ws/search?bins=${bin}`);
    return response.data
}

const scrape = async (bin) => {

    if (bin.length < 6 || !(/^\d+$/.test(bin))) {
        return {
            result: false,
            message: "Request a Valid BIN"
        };
    }

    bin = bin.substr(0, 6);
    let htmlData = await fetchHtml(bin);
    let $ = cheerio.load(htmlData);

    let message = $('.page h2').text();
    if (!message.match('Total found 1 bins')) {
        return {
            result: false,
            message: 'No results found'
        }
    }

    let type = $('table.dataframe td:nth-child(2)').text();
    let level = $('table.dataframe td:nth-child(3)').text();
    let vendor = $('table.dataframe td:nth-child(4)').text();
    let bank = $('table.dataframe td:nth-child(5)').text();
    let country = $('table.dataframe td:nth-child(6)').text();
    let countryInfo = emojiFlag.countryCode(country);

    return {
        result: true,
        message: 'Search Successful',
        data: {
            bin,
            vendor,
            type,
            level,
            bank,
            country: alpha2.getCountry(country).toUpperCase(),
            countryInfo: {
                name: countryInfo.name.toUpperCase(),
                emoji: countryInfo.emoji,
                unicode: countryInfo.unicode,
                code: countryInfo.code,
                dialCode: countryInfo.dialCode
            }
        }
    }

}

exports.scrape = scrape;