import Vue from 'vue';
import Router from 'vue-router';
import mainPage from '../pages/user/mainPage';
import list from '../pages/user/list';
import member from '../pages/user/self/member';
import sort from '../pages/user/sort';
import room from '../pages/user/room';
import subscribe from '../pages/user/subscribe';
import information from '../pages/user/self/information';
import anchorPage from '../pages/anchor/anchorPage';
import anchorRoom from '../pages/anchor/anchorRoom';
import anchorSubscribe from '../pages/anchor/anchorSubscribe';
import anchorMember from '../pages/anchor/anchorMember';
import anchorInform from '../pages/anchor/anchorInform';

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
    {
      path: '/anchor',
      name: 'anchor',
      component: anchorPage,
      children: [
        {
          name: '/anchor/member',
          path: 'member',
          component: anchorMember,
          redirect: 'member/inf',
          children: [
            {
              name: '/anchor/information',
              path: 'inf',
              component: anchorInform,
            },
          ],
        },
        {
          name: '/anchor/subscribe',
          path: 'subscribe',
          component: anchorSubscribe,
        },
        {
          name: '/anchor/room',
          path: 'room',
          component: anchorRoom,
        },
      ],
    },
  ],
});
