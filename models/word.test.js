import assert from 'assert'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

chai.use(chaiAsPromised)

const expect = chai.expect

import {
    isValidName,
    isValidWord,
    saveWord,
    getWords
} from './word'

describe('Word Model', () => {
    const testWord = {
        "name": "used",
        "meanings": [{
            "id": 1,
            "wordClass": "verb",
            "example": "He used my pen.",
            "description": "Verb use in past tense."
        },
        {
            "id": 2,
            "wordClass": "adjective",
            "example": "My pen is used.",
            "description": "Means the object is not new anymore."
        }] 
    }

    describe('isValidName', () => {

        const testName = 'used'

        it('should call validation function', () => {
            let returnTest = ''
            const fnTest = name => { returnTest = name }
            isValidName(testName, fnTest)
            assert.equal(testName, returnTest)
        })

        it('should thrown error with no function parameter', () => {
            assert.throws(isValidName.bind(null, testName, {}), TypeError)
        })
    })

    describe('isValidWord', () => {
        let returnTest1 = ''
        const fnTest1 = name => { returnTest1 = name; return true }

        it('should call validation functions', () => {
            let returnTest2 = ''
            returnTest1 = ''
            const fnTest2 = meanings => { returnTest2 = meanings; return true }
            
            isValidWord(testWord, fnTest1, fnTest2)
            assert.equal(testWord.name, returnTest1)
            assert.deepStrictEqual(testWord.meanings, returnTest2)
        })

        it('should thrown error with no function parameter', () => {
            returnTest1 = ''
            assert.throws(isValidWord.bind(null, testWord, {}, {}), TypeError)
            assert.throws(isValidWord.bind(null, testWord, fnTest1, {}), TypeError)
        })
    })

    describe('saveWord', () => {
        let returnTest1 = ''
        const fnTest1 = word => { returnTest1 = word.name; return true }

        it('should call validation functions', async () => {
            let returnTest2 = ''
            returnTest1 = ''
            const fnTest2 = () => ({
                insert: (word, callback) => { returnTest2 = word; callback() }
            })
            
            await saveWord(testWord, fnTest1, fnTest2)
            
            assert.equal(returnTest1, testWord.name)
        })

        it('should call validation functions - with error', async () => {
            let returnTest2 = ''
            returnTest1 = ''
            const fnTest2 = () => ({
                insert: (word, callback) => { returnTest2 = word; callback(new Error('test error')) }
            })
            
            return expect(saveWord(testWord, fnTest1, fnTest2)).to.be.rejectedWith(Error, 'test error')
        })

        it('should thrown error with no function parameter', () => {
            return expect(saveWord(testWord, {})).to.be.rejectedWith(TypeError)
        })
    })

    describe('getWords', () => {

        it('should thrown error with no function parameter', () => {
            let returnTest1

            const fnTest1 = () => ({
                find: query => { returnTest1 = query; return true }
            })

            getWords(null, fnTest1)

            assert.deepStrictEqual(returnTest1, {})
        })

        it('should thrown error with no function parameter', () => {
            assert.throws(getWords.bind(null, null, {}), TypeError)
        })
    })

})
