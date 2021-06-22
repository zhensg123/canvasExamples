export default [{
  path: '/deformat/base',
  name: 'deformat',
  title: '基础知识',
  icon: '',
  component: () => import(/* webpackChunkName: "deformat" */ '@/views/deformat/base.vue')
}]
