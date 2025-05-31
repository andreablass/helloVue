import Home from "@/pages/Home.vue";
import Profile from "@/pages/Profile.vue";
import NotFound from "@/pages/NotFound.vue";

export default[
    { path: '/', component: Home, name: 'home' },
    { path: '/my-profile', component: Profile, name: 'my-profile' },
    { path: '/profile/:username', component: Profile, name: 'profile' },
    { path: '/:pathMatch(.*)*', component: NotFound, name: 'not-found' },
];