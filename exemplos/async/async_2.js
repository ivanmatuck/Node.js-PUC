const request = require('request')

const url = 'https://api.worldtradingdata.com/api/v1/stock?symbol=PETR4.SA&api_token=GTm8E6a73PMb3CJHQPz2THJSEnVmF74ejEeBuiCmvBwNLYOba0rB0PzOczGh'

request({url: url, json: true}, (err, response) =>{
    const parsedJSON = response.body
    console.log(parsedJSON.data[0].symbol)
    console.log(parsedJSON.data[0].name)
    console.log(parsedJSON.data[0].price)
})