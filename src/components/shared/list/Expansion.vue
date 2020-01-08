<template>
  <div class="full-control">
    <div class="list">
      <md-list :md-expand-single="expandSingle">
        <md-list-item md-expand :md-expanded.sync="expandNews">
          <md-icon>whatshot</md-icon>
          <span class="md-list-item-text">News</span>

          <md-list slot="md-expand">
            <md-list-item class="md-inset">World</md-list-item>
            <md-list-item class="md-inset">Europe</md-list-item>
            <md-list-item class="md-inset">South America</md-list-item>
          </md-list>
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListExpansion',

  data () {
    return {
      expandNews: false,
      expandSingle: false
    }
  }
}
</script>

<style scoped>
  $list-width: 320px;

  .full-control {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
  }

  .list {
    width: $list-width;
  }

  .full-control > .md-list {
    width: $list-width;
    max-width: 100%;
    height: 400px;
    display: inline-block;
    overflow: auto;
    border: 1px solid rgba(#000, .12);
    vertical-align: top;
  }

  .control {
    min-width: 250px;
    display: flex;
    flex-direction: column;
    padding: 16px;
  }
</style>
