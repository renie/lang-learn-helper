import { saveEssay } from '../models/essay'

export const saveNewEssay = (req, res) => {
    try{
        saveEssay(req.body)
            .then(newEssay => res.status(201).send(newEssay))
            .catch(e => res.status(500).send(e.message))
        
    } catch(e) {
        res.status(500).send(e.message)
    }
}
