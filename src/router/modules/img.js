
export default [{
  path: '/img/base',
  name: 'base',
  title: '图片基础',
  icon: '',
  component: () => import(/* webpackChunkName: "base" */ '@/views/img/base.vue')
}]
