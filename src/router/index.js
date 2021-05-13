import Vue from 'vue';
import Router from 'vue-router';
import mainPage from '../pages/user/mainPage';
import list from '../pages/user/list';
import member from '../pages/user/self/member';
import sort from '../pages/user/sort';
import room from '../pages/user/room';
import subscribe from '../pages/user/subscribe';
import information from '../pages/user/self/information';

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
