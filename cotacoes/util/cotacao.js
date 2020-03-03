const request = require('request')

const cotacao = (symbol, callback) => {
    const api_token = 'GTm8E6a73PMb3CJHQPz2THJSEnVmF74ejEeBuiCmvBwNLYOba0rB0PzOczGh'
    const url = `https://api.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=${api_token}`

    request({ url: url, json: true }, (err, response) => {
        if (response.body.data === undefined){
            throw new Error(`No data found`)
        }
        
        const parsedJSON = response.body.data[0]

        const {symbol, name, price_open, price, day_high, day_low} = parsedJSON

        const data = { symbol, name, price_open, price, day_high, day_low }
        
        callback(data)
    })
}

module.exports = cotacao