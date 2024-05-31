import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/Home.vue'
import Param from '@/pages/Param.vue'
import About from '@/pages/About.vue'
import Members from '@/pages/Members.vue'
import MembersInfo from '@/pages/MembersInfo.vue'
import Videos from '@/pages/Videos.vue'
import VideoPlayer from '@/pages/VideoPlayer.vue'
import NotFound from '@/pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: Home}, // 네임드 라우팅 -> path + name으로 라우팅 가능 / 이름 없으면 path로만 가능
        {path: '/param', name: 'param', component: Param, props: true}, // props: true -> 컴포넌트로 props 전달
        {path: '/about', component: About,},
        {path : '/members', component: Members,},
        // /members: id -> /members + {path}를 통해 새로운 페이지 로드
        {path : '/members/:id(\\d+)', component: MembersInfo,},
        { path: '/videos', component: Videos,
            children : [
                { path:":id", component: VideoPlayer }
            ]
        },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    ],
});

export default router;