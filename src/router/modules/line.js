
export default [{
  path: '/line/z',
  name: 'line',
  title: '直线基础',
  icon: '',
  component: () => import(/* webpackChunkName: "line" */ '@/views/line/z.vue')
}, {
  path: '/line/lineDash',
  name: 'line',
  title: '直线点',
  icon: '',
  component: () => import(/* webpackChunkName: "line" */ '@/views/line/lineDash.vue')
}]
