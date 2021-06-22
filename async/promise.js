const fs = require('fs')

async function writeFile(){
  const data =   await readFile('./example.txt')
  const number = data.replace(/[^\d.-]/g, '')
  for(i in number){
      fs.writeFileSync('number.txt',number[i] + " ", {flag : "a"})
  }
  const letters = data.match(/[A-Za-z]/g)
  for(i in letters) {
      fs.writeFileSync('./letter.txt', letters[i] + " ",{flag: 'a'})
  }
}

function readFile(file){ 
   return fs.readFileSync(file, 'utf8') 
   
}
writeFile()