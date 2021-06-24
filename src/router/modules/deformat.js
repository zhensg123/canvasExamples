export default [{
  path: '/deformat/base',
  name: 'deformat',
  title: '基础知识',
  icon: '',
  component: () => import(/* webpackChunkName: "deformat" */ '@/views/deformat/base.vue')
},{
  path: '/deformat/move',
  name: 'deformat',
  title: '移动',
  icon: '',
  component: () => import(/* webpackChunkName: "deformat" */ '@/views/deformat/move.vue')
},{
  path: '/deformat/others',
  name: 'deformat',
  title: '变形',
  icon: '',
  component: () => import(/* webpackChunkName: "deformat" */ '@/views/deformat/others.vue')
}]
// others