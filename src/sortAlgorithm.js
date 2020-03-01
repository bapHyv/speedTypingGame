const data = require('../data/wordDatabase.json')
const fs = require('fs')
let easyWord = []
let mediumWord = []
let hardWord = []

data.data.map(e => {
    if (e.length <= 3) {
        easyWord.push(e)
    } else if (e.length === 4 || e.length === 5) {
        mediumWord.push(e)
    } else {
        hardWord.push(e)
    }
})


// CREATE EASYWORD JSON FILE
// let easyWordJSON = JSON.stringify(easyWord)
// fs.writeFile("easyWordDatabase.json", easyWordJSON, (err, result) => {
//     if (err) console.log('error', err)
// })

// CREATE MEDIUMWORD JSON FILE
// let mediumWordJSON = JSON.stringify(mediumWord)
// fs.writeFile("mediumWordDatabase.json", mediumWordJSON, (err, result) => {
//     if (err) console.log('error', err)
// })

// CREATE HARDWORD JSON FILE
// let hardWordJSON = JSON.stringify(hardWord)
// fs.writeFile("hardWordDatabase.json", hardWordJSON, (err, result) => {
//     if (err) console.log('error', err)
// })