import { saveNewEssay } from '../controllers/essay'

export const essayRoutes = [{
        method: 'post',
        url: '/essay',
        fn: saveNewEssay
    }]
