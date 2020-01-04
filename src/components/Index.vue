<template>
  <div class="myBody">
    <div class="myFirstColumn md-primary"> coluna um </div>
    <div class="mySecondColumn">
      <md-content>
        <my-card :col="'colTwo'"></my-card>
        <my-card :col="'colTwo'"></my-card>
      </md-content>
      <md-content>
        <my-card :col="'colFour'"></my-card>
      </md-content>
      <md-content>
        <my-card :col="'colFour'"></my-card>
      </md-content>
    </div>
  </div>
</template>

<script>

import Card from './shared/card/Card.vue'

export default {
  components: {
    'my-card': Card
  },
  name: 'Index'
}

</script>

<style scoped>
  .myBody {
    display: flex;
    flex-direction: row;
    margin: 0px;
    width: 100%;
    min-height: 100vh;
  }
  .myFirstColumn{
    width: 25%;
    background: #ff5252;
  }
  .mySecondColumn {
    width: 75%;
    background: gray;
  }
  .md-content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2% 5% 2% 5%;
  }
</style>
