
export default [{
  path: '/curve/arc',
  name: 'arc',
  title: '画圆弧',
  icon: '',
  component: () => import(/* webpackChunkName: "curve" */ '@/views/curve/arc.vue')
}, {
  path: '/curve/arcto',
  name: 'arc',
  title: '画圆弧1',
  icon: '',
  component: () => import(/* webpackChunkName: "curve" */ '@/views/curve/arcTo.vue')
}, {
  path: '/curve/curveto',
  name: 'arc',
  title: '画圆弧2',
  icon: '',
  component: () => import(/* webpackChunkName: "curve" */ '@/views/curve/curveto.vue')
}, {
  path: '/curve/beziercurveTo',
  name: 'arc',
  title: '画圆弧3',
  icon: '',
  component: () => import(/* webpackChunkName: "curve" */ '@/views/curve/beziercurveTo.vue')
}]
