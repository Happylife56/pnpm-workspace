export default [
  {
    path: '/financial',
    name: 'financial',
    component: () => import(/* webpackChunkName: "financial" */'../index.vue'),
  },
];
