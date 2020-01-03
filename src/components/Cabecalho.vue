<template>
  <div>
    <!-- md-content class="md-primary">Primary</md-content -->
    <md-content v-bind:class="color">Primary</md-content>
    <md-content v-bind:class="color">
      <md-icon class="fa fa-bars"></md-icon>
      <md-icon class="fa fa-bars"></md-icon>
      <md-icon class="fa fa-bars"></md-icon>
    </md-content>
  </div>
</template>

<style scoped>
  .md-content {
    background: #BCAAA4 !important;
    width: 100%;
    height: 100vh;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .md-content:nth-child(odd) {
    background: #A1887F !important;
    position: absolute;
    width: 15%;
    z-index: 999;
    margin-left: 25%;
    -webkit-transform: skew(20deg);
    -moz-transform: skew(20deg);
    -o-transform: skew(20deg);
    -webkit-box-shadow: 4px 7px 5px 4px rgba(50, 50, 50, 0.77);
    -moz-box-shadow:    4px 7px 5px 4px rgba(50, 50, 50, 0.77);
    box-shadow:         4px 7px 5px 4px rgba(50, 50, 50, 0.77);
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
