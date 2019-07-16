import { saveWord, getWords } from '../models/word'
import { wordClasses } from '../models/wordClasses'

export const saveNewWord = (req, res) => {
    try{
        saveWord(req.body)
            .then(newWord => res.status(201).send(newWord))
            .catch(e => res.status(500).send(e.message))
        
    } catch(e) {
        res.status(500).send(e.message)
    }
}

export const listAll = (_, res) => {
    getWords((_, words) => res.status(200).send(words))
}

export const listAllAvailableClasses = (_, res) => res.status(200).send(wordClasses)
