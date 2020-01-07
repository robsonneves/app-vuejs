<template>
  <div>
    <md-list class="md-triple-line">
      <md-list-item>
        <slot></slot>

        <div class="md-list-item-text">
          <span>{{ title }}</span>
          <div v-if="subtitles">
            <p v-for="subtitle in subtitles" :key="subtitle">
              {{ subtitle }}
            </p>
          </div>
          <div v-if="subtitle">
            <p>
              {{ subtitle }}
            </p>
          </div>

        </div>

      </md-list-item>

      <md-divider class="md-inset"></md-divider>

    </md-list>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitles', 'subtitle'],
  name: 'TripleLine'

}
</script>

<style scoped>
  .md-list {
    background-color:rgba(0, 0, 0, 0.0) !important;
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }
</style>
