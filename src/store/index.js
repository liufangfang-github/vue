import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
    itemNum: 1,
    answerId: [],
    itemDetail: [{
            "topic_answer": [{
                    "answer_name": "Apple",
                    "answer_id": 1
                },
                {
                    "answer_name": "android",
                    "answer_id": 2
                },
                {
                    "answer_name": "正确答案",
                    "answer_id": 3
                }
            ]
        },
        {
            "topic_answer": [{
                    "answer_name": "AAA",
                    "answer_id": 1
                },
                {
                    "answer_name": "BBB正确答案",
                    "answer_id": 2
                },
                {
                    "answer_name": "CCC",
                    "answer_id": 3
                }
            ]
        },
        {
            "topic_answer": [{
                    "answer_name": "AAA正确答案",
                    "answer_id": 1
                },
                {
                    "answer_name": "BBB",
                    "answer_id": 2
                },
                {
                    "answer_name": "CCC",
                    "answer_id": 3
                }
            ]
        },
        {
            "topic_answer": [{
                    "answer_name": "ddd",
                    "answer_id": 1
                },
                {
                    "answer_name": "ddd正确答案",
                    "answer_id": 2
                },
                {
                    "answer_name": "ddd",
                    "answer_id": 3
                }
            ]
        }
    ]
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})