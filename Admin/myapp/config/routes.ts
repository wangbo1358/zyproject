export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/funtionA',
    name: '功能功能功能A',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/funtionA/secondarysupplieragreement',
        name: '新增二级商协议',
        icon: 'smile',
        component: './Supplieragreement/secondarySupplieragreement',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/funtionB',
    name: '功能功能B',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/funtionB/detalil',
        name: '功能功能B二级',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/funtionC',
    name: '功能功能C',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/funtionC/detalil',
        name: '功能功能C二级',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/funtionD',
    name: '功能功能功能D',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/funtionD/detalil',
        name: '功能功能功能D二级',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/funtionE',
    name: '功能功能E',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/funtionE/detalil',
        name: '功能功能E二级',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/funtionF',
    name: '功能功能F',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/funtionF/detalil',
        name: '功能功能F二级',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  // },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
