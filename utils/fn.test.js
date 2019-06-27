import assert from 'assert'
import { isValidString } from './fn'

describe('Fn', () => {

    describe('isValidString', () => {
    
        it('should return valid for a regular string', () => {
            assert.ok(isValidString('regular string'))
        })

        it('should return invalid for a null string', () => {
            assert.equal(isValidString(), false)
        })

        it('should return invalid for a empty string', () => {
            assert.equal(isValidString(''), false)
            assert.equal(isValidString(' '), false)
        })

        it('should return invalid for a number', () => {
            assert.equal(isValidString(9), false)
        })

    })

})
