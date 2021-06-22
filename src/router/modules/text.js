
export default [{
  path: '/text/base',
  name: 'text',
  title: '文本基础',
  icon: '',
  component: () => import(/* webpackChunkName: "text" */ '@/views/text/base.vue')
}]
