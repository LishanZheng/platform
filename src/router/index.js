import Vue from 'vue';
import Router from 'vue-router';
import mainPage from '../pages/mainPage';
import list from '../pages/list';
import history from '../pages/history';
import sort from '../pages/sort';
import room from '../pages/room';

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
          name: 'history',
          path: 'history',
          component: history,
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
      ],
    },
  ],
});
