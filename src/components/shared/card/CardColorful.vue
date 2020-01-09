<template>
  <div>
    <md-card class="md-primary">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">DBMaster</div>
          <div class="md-subhead"></div>
          <md-card-content>
            <p class="iconsOpenExit">
              <i class="material-icons">recent_actors</i>&nbsp;Analista de Sistemas
            </p>
            <p>
              Atuava no desenvolvimento e manutenção de softwares, ultilizando as linguagens
              Html, Css, JavaScript, AngularJs, MySql ...
            </p>
            <p class="iconsOpenExit">
              2016
              <i class="material-icons">chevron_right</i>
              <i class="material-icons">apartment</i>
              <i class="material-icons">chevron_left</i>
              2018
            </p>
          </md-card-content>
        </md-card-header-text>
      </md-card-header>
    </md-card>

    <md-card class="md-accent" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Accent color</div>
          <div class="md-subhead">With hover and ripple effects</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>

    <md-card class="md-primary" md-theme="green-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Green custom theme</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header-text>

        <md-card-media>
          <img src="/assets/examples/avatar-2.jpg" alt="Avatar">
        </md-card-media>
      </md-card-header>
    </md-card>

    <md-card class="md-primary" md-theme="purple-card" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Purple primary color</div>
          <div class="md-subhead">With hover and ripple effects</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>
      </md-ripple>
    </md-card>

    <md-card class="md-primary">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">True black primary color</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header-text>

        <md-card-media>
          <img src="/assets/examples/avatar-2.jpg" alt="Avatar">
        </md-card-media>
      </md-card-header>
    </md-card>

    <md-card class="md-primary orange-card" md-theme="orange-card" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Orange primary color</div>
          <div class="md-subhead">With hover and ripple effects</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'CardColorful'
}
</script>

<style scoped>
  .md-card {
    width: 30%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
  .orange-card {
    background: orange !important;
  }
  .iconsOpenExit{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
