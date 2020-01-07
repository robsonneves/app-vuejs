<template>
  <div>
    <span v-bind:class="typeLatters">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: ['typeLatters'],
  name: 'TypographyExample'
}
</script>

<style scoped>
  div > * {
    margin: .5em 0;
    display: block;
  }
</style>
