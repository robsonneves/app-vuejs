<template>
  <div>
    <md-card class="md-primary" md-theme="orange-card" md-with-hover v-bind:class="col">
      <md-ripple>
        <md-card-header>
          {{ col }}
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
  props: ['col'],
  name: 'ThemeColors'
}

</script>

<style scoped>
  .md-card {
    display: flex;
    justify-content: space-between;
    background: #E0E0E0 !important;
    width: 300px;
    display: inline-block;
    color: black !important;
  }
  .colTwo {
    width: 70vh !important;
  }

  .colFour {
    width: 143vh !important;
  }
</style>
