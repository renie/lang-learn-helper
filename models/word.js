import { getWordDatabase } from './model'
import { areAllValidMeanings } from './meaning'
import { isValidString } from '../utils/fn'

export const isValidName = (name, validateStringFn = isValidString) =>
    validateStringFn(name)

export const isValidWord = (word, validateNameFn = isValidName, validateMeaningsFn = areAllValidMeanings) =>
    (validateNameFn(word.name) && validateMeaningsFn(word.meanings))

export const saveWord = (word, validateWordFn = isValidWord, getWordDatabaseFn = getWordDatabase) =>
    new Promise((resolve, reject) => {
        if (!validateWordFn(word))
            reject('Invalid word object.')

        getWordDatabaseFn().insert(word, (err, doc) => {
            if (err)
                reject(err)
            resolve(doc)
        })
    })


export const getWords = (afterFindingFn = () => {}, getWordDatabaseFn = getWordDatabase) =>
    getWordDatabaseFn().find({}, afterFindingFn)
