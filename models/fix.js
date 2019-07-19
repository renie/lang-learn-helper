import { isFuture, isValid as isValidDateDp } from 'date-fns'
import { isValidString } from '../utils/fn'

export const isValidDate = date => (isValidDateDp(date) && isFuture(date))
export const isValidFrom = from => isValidString(from)
export const isValidTo = to => isValidString(to)

export const isValidFix = fix => (
    isValidDate(fix.lastUpdate) &&
    isValidFrom(fix.from) &&
    isValidTo(fix.to)
)
