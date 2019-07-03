import { saveNewWord, listAll, listAllAvailableClasses } from '../controllers/word'

export const wordRoutes = [{
        method: 'post',
        url: '/word',
        fn: saveNewWord
    },
    {
        method: 'get',
        url: '/word',
        fn: listAll
    },
    {
        method: 'get',
        url: '/available-word-classes',
        fn: listAllAvailableClasses
    }]
