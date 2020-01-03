<template>
  <div class="base">
    <md-content class="md-primary">
      <my-card :col="'colTwo'"></my-card>
      <my-card :col="'colTwo'"></my-card>
      <my-card :col="'colFour'"></my-card>
      <my-card :col="'colFour'"></my-card>
      <my-card :col="'colFour'"></my-card>
    </md-content>

    <md-content class="md-accent">2</md-content>
  </div>
</template>

<style scoped>
  .base {
    display: flex;
    flex-direction: column;
  }
  .md-content {
    height: 100vh;
    position: absolute;
    -webkit-box-shadow: 4px 7px 5px 4px rgba(50, 50, 50, 0.77);
    -moz-box-shadow:    4px 7px 5px 4px rgba(50, 50, 50, 0.77);
    box-shadow:         4px 7px 5px 4px rgba(50, 50, 50, 0.77);
    color: black;
    padding-left: 5%;
    padding-right: 5%;
  }
  .md-content:nth-child(even) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 20%;
  }
  .md-content:nth-child(odd) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-left: 20%;
    width: 80%;
  }
  .md-primary {
    background: #FAFAFA !important;
  }
</style>

<script>

import Card from './shared/card/Card.vue'

export default{

  components: {
    'my-card': Card
  },
  name: 'Base',
  data: () => {
    return {
      color: 'md-accent'
    }
  }
}

</script>
