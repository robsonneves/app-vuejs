import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
// import Cabecalho from '@/components/Cabecalho'
import Base from '@/components/Base'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Base',
      component: Base
    }

    // {
    //   path: '/',
    //   name: 'Cabecalho',
    //   component: Cabecalho
    // }
    /*
    {
      path: '/helloWord ',
      name: 'HelloWorld',
      component: HelloWorld
    }
    */
  ]
})
