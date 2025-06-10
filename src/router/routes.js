import Home from "@/pages/Home.vue";
import Profile from "@/pages/Profile.vue";
import NotFound from "@/pages/NotFound.vue";
import Practice from "@/pages/Practice.vue";

export default[
    { path: '/', component: Home, name: 'home' },
    { path: '/my-profile', component: Profile, name: 'my-profile' },
    { path: '/practice', component: Practice, name: 'practice' },
    { path: '/profile/:username', component: Profile, name: 'profile' },
    { path: '/:pathMatch(.*)*', component: NotFound, name: 'not-found' },
];