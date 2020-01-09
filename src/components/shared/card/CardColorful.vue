<template>
  <div>
    <md-card v-bind:class="'md-' + color" md-with-hover>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ title }}</div>
          <div class="md-subhead"></div>
          <md-card-content>
            <p class="iconsOpenExit">
              <i class="material-icons">recent_actors</i>&nbsp;{{ descriptionFunction }}
            </p>
            <p>
              {{ description }}
            </p>
            <p class="iconsOpenExit">
              {{ initialYear }}
              <i class="material-icons">chevron_right</i>
              <i class="material-icons">apartment</i>
              <i class="material-icons">chevron_right</i>
              {{ finalYear ? finalYear : 'Atual' }}
            </p>
          </md-card-content>
        </md-card-header-text>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
export default {
  props: ['color', 'title', 'descriptionFunction', 'description', 'initialYear', 'finalYear'],
  name: 'CardColorful'
}
</script>

<style scoped>
  .md-card {
    display: flex;
    justify-content: center;
    width: 30% !important;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    float: left;
  }
  .md-orange {
    background: orange !important;
  }
  .iconsOpenExit{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .md-white{
    background: white !important;
  }
</style>
