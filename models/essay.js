import { getEssayDatabase } from './model'

import { isValidString } from '../utils/fn'
import { wordClasses } from './wordClasses'
import { isValidFix } from './fix'


export const hasValidFixes = fixes => fixes.every(isValidFix)

export const hasValidWordClass = (wordClass, validClasses = wordClasses) =>
    validClasses.some(validClass => validClass === wordClass)

export const hasValidName = name => isValidString(name)

export const isValidEssayWord = word => (
    hasValidName(word.word) &&
    hasValidWordClass(word.wordClass) &&
    hasValidFixes(word.fixes)
)

export const isValidEssay = essay => essay.every(isValidEssayWord)

export const saveEssay = (essay, validateEssayFn = isValidEssay, getEssayDatabaseFn = getEssayDatabase) =>
    new Promise((resolve, reject) => {
        if (!validateEssayFn(essay))
            reject('Invalid essay object.')

        getEssayDatabaseFn().insert({text: essay, lastUpdate: new Date()}, (err, doc) => {
            if (err)
                reject(err)
            resolve(doc)
        })
    })
