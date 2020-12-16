<template>
 <div>
  <the-header title="eLearning Resource"></the-header>
  <stored-resources :eresources="storedResources"></stored-resources>
 </div>
</template>

<script>
import StoredResources from './components/elearning-resources/StoredResources.vue'
import TheHeader from './components/layout/TheHeader.vue'

export default {
  components: {
    'stored-resources': StoredResources,
    'the-header': TheHeader
  },
  data(){
    return{
      storedResources: [
        { 
          id: 'official-guide', 
          title: 'Official Guide', 
          description: 'The official Vue.js development guide', 
          link: 'https://vuejs.org'
        },
        { 
          id: 'google', 
          title: 'Google', 
          description: 'Google search engine', 
          link: 'https://google.com'
        },
      ]
    }
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
