const data = require('./data')

module.exports = (args) => {
    const {user, draw } = args
    const userExisted = data.find(item => item.user === user)
    console.log(userExisted)
    if(draw < 20)return {message : `Can not withdraw with ${draw}`}
    if(userExisted.credit - draw < 50) return {message :`Can not with draw ! Your credit : ${userExisted.credit}` }
    
    userExisted.credit -= draw
    return userExisted
}