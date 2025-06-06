import { createRouter, createWebHistory } from 'vue-router';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesRegistation from './pages/coaches/CoachRegistation.vue';
import NotFound from './pages/NotFound.vue';
import RequestsRecieved from './pages/requests/RequestsReceived.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      //when adding props true, the view router
      //will pass the value ID holds in the end as a prop to coach detail
      children: [
        { path: 'contact', component: ContactCoach }, // coaches/c1/contact
      ],
    },
    { path: '/register', component: CoachesRegistation },
    { path: '/requests', component: RequestsRecieved },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
