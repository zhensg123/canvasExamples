export default [{
  path: '/status/save',
  name: 'status',
  title: 'save',
  icon: '',
  component: () => import(/* webpackChunkName: "status" */ '@/views/status/save.vue')
},{
    path: '/status/clip',
    name: 'status',
    title: 'clip',
    icon: '',
    component: () => import(/* webpackChunkName: "status" */ '@/views/status/clip.vue')
  }]
