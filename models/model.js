import Datastore from 'nedb'

export const getLoadedDatabase = (name, databaseLoadFn = Datastore) => (new databaseLoadFn({filename:name, autoload: true}))

export const getWordDatabase = (getDatabaseFn = getLoadedDatabase) => getDatabaseFn('db/word.db')

export const getEssayDatabase = (getDatabaseFn = getLoadedDatabase) => getDatabaseFn('db/essay.db')
