<template>
 <div>
  <the-header title="eLearning Resource"></the-header>
  <the-resources></the-resources>
 </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheResources from './components/elearning-resources/TheResources.vue'


export default {
  components: {
    TheHeader,
    TheResources
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body{
  margin: 0;
  padding: 0;
}

</style>
