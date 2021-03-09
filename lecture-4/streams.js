// 3 types of streams
// 1. Writable streams
// 2. Readable streams
// 3.Duplex



const fs = require('fs')
// const writableStreams = fs.createWriteStream('./output.txt')
const readableStreams = fs.createReadStream('./output.txt', 'UTF-8')


// writableStreams.write("ova e prva recinica")

readableStreams.on('data', chunk =>{
    console.log('Procitavme now chunk:', chunk)
})
