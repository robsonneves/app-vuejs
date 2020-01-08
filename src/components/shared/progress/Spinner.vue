<template>
  <div>
    <md-progress-spinner md-mode="determinate" :md-value="porcent"></md-progress-spinner>
    <br>
    <font v-for="i in infos" :key="i">
      {{ i }}
    </font>
    <!-- md-progress-spinner class="md-accent" md-mode="determinate" :md-value="amount"></md-progress-spinner -->
  </div>
</template>

<script>
export default {
  props: ['porcent', 'infos'],
  name: 'ProgressSpinnerDeterminate'
}
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    float: left;
  }
  .md-progress-spinner {
    width: 100%;
    margin-bottom: 0px;
  }
  font {
    width: 100%;
    position: relative;
  }
</style>
