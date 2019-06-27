import { is, isEmpty, isNil } from 'ramda'

export const isValidString = string => (
    !isNil(string) &&
    is(String, string) &&
    !isEmpty(string.trim())
)



// export const isValidString = (string) => 
//         []allPass([
//             is(String, string)
//         ])()

// export const isValidString = 
//     (string, 
//     allPassFn = allPass, 
//     isNullableFn = isNil, 
//     isEmptyFn = isEmpty) => 
//         allPassFn([
//             !isNullableFn(string),
//             is(String, string),
//             !isEmptyFn(string)
//         ])()
