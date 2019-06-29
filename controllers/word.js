import { saveWord, getWords } from '../models/word'

export const saveNewWord = (req, res) => {
    try{
        saveWord(req.body)
            .then(newWord => res.status(201).send(newWord))
            .catch(error => res.status(500).send(e.message))
        
    } catch(e) {
        res.status(500).send(e.message)
    }
}

export const listAll = (_, res) => {
    getWords((_, words) => res.status(200).send(words))
}
