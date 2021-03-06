const fs = require('fs')
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const bayarLimit = (userid, amount) => {
	let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit -= amount
        fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
    }
}
 
const limitAdd = (userid) => {
     let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id == userid) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit += 1
        fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
    }
} 

module.exports = {	 
	bayarLimit,
	limitAdd
}