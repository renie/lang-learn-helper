import { is, isEmpty, isNil } from 'ramda'

export const isValidString = string => (
    !isNil(string) &&
    is(String, string) &&
    !isEmpty(string.trim())
)
