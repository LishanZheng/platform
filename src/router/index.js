import Vue from 'vue';
import Router from 'vue-router';
import mainPage from '../pages/mainPage';
import list from '../pages/list';
import member from '../pages/member';
import sort from '../pages/sort';
import room from '../pages/room';
import subscribe from '../pages/subscribe';
import information from '../pages/information';

Vue.use(Router);
const originalPush = Router.prototype.push;

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage,
      redirect: '/list',
      children: [
        {
          name: 'list',
          path: 'list',
          component: list,
        },
        {
          name: 'member',
          path: 'member',
          component: member,
          redirect: 'member/inf',
          children: [
            {
              name: 'information',
              path: 'inf',
              component: information,
            },
          ],
        },
        {
          name: 'sort',
          path: 'sort',
          component: sort,
        },
        {
          name: 'room',
          path: 'room',
          component: room,
        },
        {
          name: 'subscribe',
          path: 'subscribe',
          component: subscribe,
        },
      ],
    },
  ],
});
