const fs = require('fs')

fs.readFile('./example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const number = data.replace(/[^\d.-]/g, '')
    for (i in number) {
        fs.writeFileSync('./number.txt', number[i] + " ",{flag : 'a'},  (error) => {
            if(error) throw error 
        }) 
    }
    const letters = data.match(/[A-Za-z]/g)
    for (i in letters){
        fs.writeFileSync('./letter.txt',letters[i] + " ", {flag : 'a'}, (err)=>{
            if(err) throw err 
        })
    }
})
