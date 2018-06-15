import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Test from '@/components/Test'
import Score from '@/components/score'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Test',
            name: 'Test',
            component: Test
        },
        {
            path: '/score',
            name: 'Score',
            component: Score
        }
    ]
})