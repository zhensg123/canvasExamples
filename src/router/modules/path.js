
export default [{
  path: '/path/line',
  name: 'path',
  title: 'path练习',
  icon: '',
  component: () => import(/* webpackChunkName: "path" */ '@/views/path/line.vue')
}]
