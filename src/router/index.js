import Vue from 'vue';
import Router from 'vue-router';
import mainPage from '../pages/mainPage';
import list from '../pages/list';
import history from '../pages/history';
import sort from '../pages/sort';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage,
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
      ],
    },
  ],
});
