export default [
  {
    path: '/cashierset',
    name: 'cashierset',
    component: () => import(/* webpackChunkName: "cashierset" */'../index.vue'),
    redirect: '/cashierset/payAdmin',
    children: [
      {
        path: 'payAdmin',
        name: 'payAdmin',
        component: () => import(/* webpackChunkName: "cashierset-payAdmin" */'../payAdmin/index.vue'),
      },
      {
        path: 'discountAdmin',
        name: 'discountAdmin',
        component: () => import(/* webpackChunkName: "cashierset-discountAdmin" */'../discountAdmin/index.vue'),
      },
    ],
  },
];
