export default [
  {
    path: '/cashAdmin',
    name: 'cashAdmin',
    component: () => import(/* webpackChunkName: "cashAdmin" */'../index.vue'),
  },
];
