<template>
  <div id="app">
    <div id="container" style="width: 400px; height: 600px; overflow-y: scroll;">
      <v-select class="v-select" :options="options"/>
      <v-select class="v-select" :options="options"/>
      <v-select class="v-select" :options="options"/>
      <v-select class="v-select" :options="options"/>
      <v-select class="v-select" :options="options"/>
      <v-select class="v-select" :options="options"/>
      <v-select class="v-select" :options="options"/>
      <v-select class="v-select" :options="options"/>
      <v-select class="v-select" :options="options"/>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

export default {
  name: 'app',
  components: {
    vSelect
  },
  computed: {
    options() {
      return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    }
  }
}
</script>

<style lang="scss">
body {
  #container {
    background-color: #fbf2d4;

    .v-select {
      margin: 48px;
    }
  }
}
</style>

