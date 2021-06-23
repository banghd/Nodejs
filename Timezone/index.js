const moment = require('moment-timezone')
const readline = require('readline')
var list = moment.tz.names() ///Array
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
   
    let data = moment.tz(value).format('MMMM Do YYYY, h:mm:ss a')// sử dụng let
    console.log(`bây giờ ở ${value} là ` + data)
    
})