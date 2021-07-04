
export default [{
    path: '/event/base',
    name: 'event',
    title: '事件对象',
    icon: '',
    component: () => import(/* webpackChunkName: "event" */ '@/views/event/base.vue')
  },{
    path: '/event/circle',
    name: 'event',
    title: '运行',
    icon: '',
    component: () => import(/* webpackChunkName: "event" */ '@/views/event/circle.vue')
  },{
    path: '/event/distance',
    name: 'event',
    title: '求两点之间的距离',
    icon: '',
    component: () => import(/* webpackChunkName: "event" */ '@/views/event/distance.vue')
  }]
  