import { isValidString } from '../utils/fn'

import { wordClasses } from './wordClasses'


export const hasValidExample =  (example, validateStringFn = isValidString) => 
    validateStringFn(example)

export const hasValidDescription =  (description, validateStringFn = isValidString) => 
    validateStringFn(description)

export const hasValidWordClass = (wordClass, validClasses = wordClasses) =>
    validClasses.some(validClass => validClass === wordClass)

export const isValidMeaning = meaning => (
    hasValidWordClass(meaning.wordClass) &&
    hasValidDescription(meaning.description) &&
    hasValidExample(meaning.example)
)

export const areAllValidMeanings = (meanings, validateMeaningFn = isValidMeaning) =>
    meanings.every(validateMeaningFn) 
