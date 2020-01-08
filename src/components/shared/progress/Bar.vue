<template>
  <div>
    <md-badge class="md-primary" md-content=""  v-bind:style="{ 'margin-left': porcent + '%' }" />
    <md-progress-bar class="md-accent" md-mode="determinate" :md-value="porcent"></md-progress-bar>
  </div>
</template>

<script>
export default {
  props: ['porcent'],
  name: 'ProgressBarDeterminate'
}
</script>

<style scoped>
  .md-badge {
    position: relative !important;
    margin-top: 24px;
  }
  .md-progress-bar {
    margin-top: 1vh;
    margin-left: 24px;
    /* margin: 24px;*/
  }
</style>
