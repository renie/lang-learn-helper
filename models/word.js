import { getWordDatabase } from './model'
import { areAllValidMeanings } from './meaning'
import { isValidString } from '../utils/fn'

export const isValidName = (name, validateStringFn = isValidString) => 
    validateStringFn(name)

export const isValidWord = (word, validateMeaningsFunction = areAllValidMeanings) => 
    (isValidName(word.name) && validateMeaningsFunction(word.definition))

export const saveWord = (word, getWordDatabaseFn = getWordDatabase) => {
    if (isValidWord(word))
        return getWordDatabaseFn().insert(word)
    throw Error('Invalid word object: ', word)
}


export const getWords = (afterFindingFn, getWordDatabaseFn = getWordDatabase) => getWordDatabaseFn().find({}, afterFindingFn)
