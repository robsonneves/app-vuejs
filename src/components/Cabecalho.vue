<template>
  <div>
    <!--md-content class="md-primary">Primary</md-content -->
    <md-content v-bind:class="color">Accent</md-content>
  </div>
</template>

<style scoped>
  .md-content {
    width: 100%;
    height: 100vh;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
</style>

<script>

import Vue from 'vue'
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)

export default{
  name: 'PaperContent',
  data: () => {
    return {
      color: 'md-accent'
    }
  }
}

</script>
