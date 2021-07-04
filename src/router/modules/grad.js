
export default [{
  path: '/grad/line',
  name: 'grad',
  title: '线性渐变',
  icon: '',
  component: () => import(/* webpackChunkName: "grad" */ '@/views/grad/line.vue')
}, {
  path: '/grad/shadow',
  name: 'grad',
  title: '阴影',
  icon: '',
  component: () => import(/* webpackChunkName: "grad" */ '@/views/grad/shadow.vue')
}]
