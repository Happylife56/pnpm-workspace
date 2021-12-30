export default [
  {
    path: '/storeset',
    name: 'storeset',
    component: () => import(/* webpackChunkName: "storeset" */'../index.vue'),
  },
  {
    path: '/storeset/addstore',
    name: 'addstore',
    redirect: '/storeset/addstore/storeList',
    component: () => import(/* webpackChunkName: "storeset-addstore" */'../addstore/index.vue'),
    children: [
      {
        path: 'storeList',
        name: 'storeList',
        component: () => import('../addstore/storeList.vue'),
      },
      {
        path: ':type',
        name: 'editStore',
        component: () => import('../addstore/editStore.vue'),
      },
    ],
  },
  {
    path: '/machineAdmin',
    name: 'machineAdmin',
    component: () => import(/* webpackChunkName: "addMachine" */'../machineAdmin/index.vue'),
  },
  {
    path: '/notCreated',
    name: 'notCreated',
    component: () => import(/* webpackChunkName: "notCreated" */'../notCreated/index.vue'),
  },
];
