// import Vue from 'vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import Mybutton from '../components/Mybutton.vue'
import KnowledgeGraph from '../pages/KnowledgeGraph.vue'
import KnowledgeExplain from '../pages/KnowledgeExplain.vue'
import Home from '../pages/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import GraphExplain from '../components/GraphExplain.vue'
import Exam from '../components/Exam.vue'
import Setting from '../pages/Setting.vue'
import Guide from '../pages/Guide.vue'
import Intro from '../pages/Intro.vue'
import Video from '../components/Video.vue'
import Visualized from '../components/Visualized.vue'
const routes=[
        {path:'/',component:Home},
        {path:'/Mybutton',component:Mybutton},
        {path:'/KnowledgeGraph',component:KnowledgeGraph},
        {path:'/KnowledgeExplain',component:KnowledgeExplain},
        {path:'/Guide',component:Guide},
        {path:'/Intro',component:Intro},
        {path:'/Home',component:Home},
        {path:'/Login',component:Login},
        {path:'/Register',component:Register},
        {path:'/GraphExplain',component:GraphExplain},
        {path:'/Exam',component:Exam},
        {path:'/Setting',component:Setting},
        {path:'/video',component:Video},
        {path:'/visualized',component:Visualized}
    ]
const router=createRouter({
    routes,
    history:createWebHashHistory()
})
export default router

