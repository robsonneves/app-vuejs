<template>
  <div class="myBody">
    <div class="myFirstColumn md-primary">
        <my-avatar></my-avatar>
        <my-title :typeLatters="'md-display-2'"> Nome </my-title>
        <my-title :typeLatters="'md-display-1'"> Sobrenome </my-title>
        <!-- my-title :typeLatters="'md-caption'"> Descrição </my-title -->
        <my-triple-line :title="'Natural de Curitiba - PR'" :subtitle="'30 anos'">
          <md-icon class="md-size-2x">child_friendly</md-icon>
        </my-triple-line>
        <my-triple-line :title="'Endereço'" :subtitles="['Rua Osmario de Lima 222', 'Bairro - Tarumã', 'Curitiba - PR']">
          <md-icon class="md-size-2x">person_pin</md-icon>
        </my-triple-line>
        <my-triple-line :title="'Contatos'" :subtitles="['teste@teste.com', '(41) 3232-3232','(41) 98888-8888']">
          <md-icon class="md-size-2x">contacts</md-icon>
        </my-triple-line>
    </div>
    <div class="mySecondColumn">
      <md-content>
        <my-card :col="'colTwo'">
          <my-progress-bar></my-progress-bar>
        </my-card>
        <my-card :col="'colTwo'">
          <my-progress-spinner></my-progress-spinner>
        </my-card>
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
import Avatar from './shared/avatar/Avatar.vue'
import Title from './shared/texts/Title.vue'
import TripleLine from './shared/list/TripleLine.vue'
import ProgressBar from './shared/progress/Bar.vue'
import ProgressSpinner from './shared/progress/Spinner.vue'

export default {
  components: {
    'my-card': Card,
    'my-avatar': Avatar,
    'my-title': Title,
    'my-triple-line': TripleLine,
    'my-progress-bar': ProgressBar,
    'my-progress-spinner': ProgressSpinner
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
    padding: 0px 10% 0px 10%;
    background: gray;
  }
  .myFirstColumn{
    width: 25%;
    background: #ff5252;
  }
  .mySecondColumn {
    width: 75%;
    background: white;
  }
  .md-content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2% 5% 2% 5%;
  }
</style>
