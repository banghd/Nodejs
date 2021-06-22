const moment = require('moment-timezone')
const readline = require('readline')
const list = moment.tz.names()
for(x in list){
    console.log( "Bây giờ ở " +list[x] + " là " + moment.tz( list[x]).format('MMMM Do YYYY, h:mm:ss a'))
}

function findTimezone(city){
    return moment.tz(city).format('MMMM Do YYYY, h:mm:ss a')
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nhập tên thành phố cần tìm ?', (value)=>{
   
    const data = moment.tz(value).format('MMMM Do YYYY, h:mm:ss a')
    console.log(data)
    console.log(`bây giờ ở ${value} là ` + data)
    
})