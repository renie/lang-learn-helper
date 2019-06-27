import assert from 'assert'
import { 
    hasValidExample,
    hasValidDescription,
    hasValidWordClass,
    isValidMeaning,
    areAllValidMeanings } from './meaning'

describe('Meaning Model', () => {

    describe('hasValidExample', () => {

        it('should return valid example for regular sentence', () => {
            assert.ok(hasValidExample('My money is in that office, right?'))
        })

        it('should return invalid example for empty sentence', () => {
            assert.equal(hasValidExample(''), false)
        })

        it('should return invalid example for null sentence', () => {
            assert.equal(hasValidExample(), false)
        })

    })

    describe('hasValidDescription', () => {

        it('should return valid description for regular text', () => {
            assert.ok(hasValidDescription('Then I am gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I am talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?'))
        })

        it('should return valid description for empty text', () => {
            assert.equal(hasValidDescription(''), false)
        })

        it('should return valid description for null text', () => {
            assert.equal(hasValidDescription(), false)
        })

    })

    describe('hasValidWordClass', () => {

        it('should return valid word class for every class', () => {
            assert.ok(hasValidWordClass('not set'))
            assert.ok(hasValidWordClass('noun'))
            assert.ok(hasValidWordClass('verb'))
            assert.ok(hasValidWordClass('adjective'))
            assert.ok(hasValidWordClass('adverb'))
            assert.ok(hasValidWordClass('pronoun'))
            assert.ok(hasValidWordClass('preposition'))
            assert.ok(hasValidWordClass('conjunction'))
            assert.ok(hasValidWordClass('interjection'))
            assert.ok(hasValidWordClass('numeral'))
            assert.ok(hasValidWordClass('article'))
            assert.ok(hasValidWordClass('determiner'))
        })

        it('should return invalid word class for another class', () => {
            assert.equal(hasValidWordClass('declesion'), false)
        })

        it('should return invalid word class for empty text', () => {
            assert.equal(hasValidWordClass(''), false)
        })

        it('should return invalid word class for null text', () => {
            assert.equal(hasValidWordClass(), false)
        })

    })

    const correctMeaningTest = {
        wordClass: 'noun',
        example: 'My money is in that office, right?',
        description: 'Then I am gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I am talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?'
    }

    const badMeaningTest1 = {
        example: 'My money is in that office, right?',
        description: 'Then I am gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I am talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?'
    }

    const badMeaningTest2 = {
        wordClass: 'bla',
        example: 'My money is in that office, right?',
        description: 'Then I am gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I am talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?'
    }

    describe('isValidMeaning', () => {

        it('shoud return valid meaning for good structure', () => {
            assert.ok(isValidMeaning(correctMeaningTest))
        })

        it('should return invalid meaning for missing word class', () => {
            assert.equal(isValidMeaning(badMeaningTest1), false)
        })

        it('should return invalid meaning for bad wordClass', () => {
            assert.equal(isValidMeaning(badMeaningTest2), false)
        })

    })

    describe('areAllValidMeanings', () => {

        it('shoud return valid meaning for good structure', () => {
            assert.ok(areAllValidMeanings([correctMeaningTest]))
        })

        it('should return invalid meaning for missing word class', () => {
            assert.equal(areAllValidMeanings([badMeaningTest1]), false)
        })

        it('should return invalid meaning for mixed', () => {
            assert.equal(areAllValidMeanings([badMeaningTest2, correctMeaningTest]), false)
        })

    })


})
