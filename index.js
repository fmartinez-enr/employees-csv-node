const fs = require('fs')
const args = process.argv.slice(2)
fs.readFile('file.csv', 'utf8', function(err, data) {

    if (err) {
        console.log(err.message)
        return;
    }

    var content = data.split('\n')
    
    var header = content.shift().split(',')
    var content = content.map(x => x.split(','))

    content.pop()

    const numberToGet = args[0]

    if (!numberToGet) {
        console.log('You need to send and argument with and ID, Example: node index.js [1]')
    } 

    if (numberToGet > content.lenth) {
        console.log('Item not found')
    }

    const resultContent = content[numberToGet - 1]
    const resultMap = resultContent.map((value, index) => [header[index], value])
    const result = Object.fromEntries(resultMap)

    const valueToGet = args[1]

    if (!valueToGet) {
        console.log(result)
        return
    }

    const resultWithValue = result[valueToGet]
    console.log(resultWithValue)

})

