export default [
  {
    path: '/collect',
    name: 'collect',
    component: () => import(/* webpackChunkName: "collect" */'../index.vue'),
  },
];
