<template>
  <md-card md-with-hover v-bind:class="col">
    <md-ripple>
      <md-card-header>
        <div class="md-title">{{ title }}</div>
        <div class="md-subhead">{{ subtitle }}</div>
      </md-card-header>

      <md-card-content>
        <slot></slot>
      </md-card-content>
    </md-ripple>
  </md-card>
</template>

<script>

export default {
  props: ['col', 'title', 'subtitle'],
  name: 'ThemeColors'
}

</script>

<style scoped>
  .md-card {
    display: flex;
    background: #E0E0E0 !important;
    color: black !important;
  }
  .colTwo {
    width: 48% !important;
  }

  .colFour {
    width: 100% !important;
  }
</style>
