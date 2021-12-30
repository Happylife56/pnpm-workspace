export default [
  {
    path: '/commonSetting',
    name: 'commonSetting',
    component: () => import(/* commonSetting: "notCreated" */'../index.vue'),
    redirect: '/commonSetting/staffAdmin',
    children: [
      {
        path: 'staffAdmin',
        name: 'staffAdmin',
        component: () => import(/* webpackChunkName: "commonSetting-staffAdmin" */'../staffAdmin/index.vue'),
      },
      {
        path: 'goodsLabel',
        name: 'goodsLabel',
        component: () => import(/* webpackChunkName: "commonSetting-staffAdmin" */'../goodsLabel/index.vue'),
      },
    ],
  },
];
