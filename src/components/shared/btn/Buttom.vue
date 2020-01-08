<template>
  <div>
    <div>
      <my-Dialog>
        <md-button class="md-fab md-plain" v-bind:class="color">
          <slot>
            <strong>{{ title }}</strong>
          </slot>
        </md-button>
      </my-Dialog>
    </div>
  </div>
</template>

<style scoped>
  .md-button {
    min-width: 8vh;
    min-height: 8vh;
    float: left;
    margin-bottom: 2vh;
    color: white !important;
  }
</style>

<script>

import Dialog from '../modal/Dialog.vue'

export default {
  components: {
    'my-Dialog': Dialog
  },
  props: ['color', 'title'],
  name: 'FloatingButtons'
}
</script>
