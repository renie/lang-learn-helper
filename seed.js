import { getWordDatabase } from './models/model'
import fs from 'fs'
var dir = './db'

if (!fs.existsSync(dir))
    fs.mkdirSync(dir)


const words = [{
    'name': 'cross',
    'meanings': [{
        'id': 1,
        'wordClass': 'noun',
        'example': 'The constellation Southern Cross',
        'description': 'a mark, object, or figure formed by two short intersecting lines or pieces (+ or ×)'
    },
    {
        'id': 2,
        'wordClass': 'verb',
        'example': 'The two lines cross at 90°',
        'description': 'Pass in an opposite or different direction'
    },
    {
        'id': 3,
        'wordClass': 'adjective',
        'example': 'He seemed to be very cross about something',
        'description': 'Annoyed'
    }]
},

{
    'name': 'egg',
    'meanings': [{
        'id': 1,
        'wordClass': 'verb',
        'example': 'Encourage someone to do something.',
        'description': 'His brother egg him.'
    },
    {
        'id': 2,
        'wordClass': 'noun',
        'example': 'The fish is lay eggs on the lake',
        'description': 'an oval or round object laid by some female animals.'
    }] 
},

{
    'name': 'classified',
    'meanings': [{
        'id': 1,
        'wordClass': 'adjective',
        'example': 'This pen is classified among blue ones.',
        'description': 'Verb classify in past tense.'
    },
    {
        'id': 2,
        'wordClass': 'noun',
        'example': 'He is reading the classified.',
        'description': 'Small advertisements placed in a newspaper and organized in categories..'
    }] 
},

{
    'name': 'used',
    'meanings': [{
        'id': 1,
        'wordClass': 'verb',
        'example': 'He used my pen.',
        'description': 'Verb use in past tense.'
    },
    {
        'id': 2,
        'wordClass': 'adjective',
        'example': 'My pen is used.',
        'description': 'Means the object is not new anymore.'
    }] 
}

]

const db = getWordDatabase()

words.forEach(word => db.insert(word, (err, doc) =>{
    if (err) {
        console.log(err)
        return 1
    }

    console.log(`Word ${word.name} included under id ${doc._id}.`)
    return 0
}))

